import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ISkills, IProjects, Theme, THEME, SECTION } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import ScrollUp from "../assets/scrollup.webp";

interface IHomeProps {
  projects: IProjects[];
  skills: ISkills[];
}

const Home: NextPage<IHomeProps> = ({projects, skills }) => {
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<string>(THEME.LIGHT);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("themeValue");
    setTheme(theme === THEME.LIGHT || !theme ? THEME.LIGHT : THEME.DARK);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case SECTION.ABOUT:
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;

      case SECTION.PROJECTS:
        scrollObject = {
          top: projectsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case SECTION.SKILLS:
        scrollObject = {
          top: skillsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case SECTION.CONTACT:
        scrollObject = {
          top: contactRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div>
      <Head>
        <title>Sanskar Dewangan</title>
        <meta
          name="description"
          content="Hey, I'm Sanskar Dewangan a Software Developer from Bhilai Nagar, Chhattisgarh. Here's my portfolio where you can see all my projects, blogs, and achievements."
        />
        <meta name="author" content="Sanskar Dewangan" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main data-theme={theme}>
        <Navbar onNavItemClick={handleNavItemClick} switchTheme={switchTheme} theme={theme} />

        <section className={SECTION.ABOUT}>
          <About />
        </section>

        <section className={SECTION.PROJECTS} ref={projectsRef}>
          <Projects projects={projects} />
        </section>

        <section className={SECTION.SKILLS} ref={skillsRef}>
          <Skills skills={skills} />
        </section>

        <section className="contact" ref={contactRef}>
          <Contact theme={theme as Theme} />
        </section>

        <Footer />

        {isVisible && <img src={ScrollUp.src} alt="" className="scroll-up" onClick={scrollToTop} />}

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </main>
    </div>
  );
};

export default Home;


// Example API endpoints for fetching skills and projects
const SKILLS_API = '/api/skills';
const PROJECTS_API = '/api/projects';

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetching skills data from REST API
    const skillsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${SKILLS_API}`);
    const skills: ISkills[] = await skillsRes.json();

    // Fetching projects data from REST API
    const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${PROJECTS_API}`);
    const projects: IProjects[] = await projectsRes.json();

    // Return props along with revalidation setting
    return {
      props: {
        skills,
        projects,
      },
      revalidate: 10, // Revalidate the page every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Handle error and return fallback props if needed
    return {
      props: {
        skills: [] as ISkills[],
        projects: [] as IProjects[],
      },
    };
  }
};
