import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ISkills, IProjects, IJobs, SECTION } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { PerformanceDashboard } from "../components/PerformanceDashboard";
import ScrollUp from "../assets/scrollup.webp";
import client from "../lib/apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";
import { AnimatedSection } from "../components/AnimatedSection";

interface IHomeProps {
  projects: IProjects[];
  skills: ISkills[];
  jobs: IJobs[];
}

/**
 * Home Page Component
 * Main portfolio page that displays all sections
 *
 * @param projects - Array of project objects
 * @param skills - Array of skill objects
 * @param jobs - Array of job objects
 */
const Home: NextPage<IHomeProps> = ({projects, skills, jobs }) => {
  // Refs for section scrolling
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  // State for scroll to top button visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Effect to handle scroll visibility of scroll to top button
   */
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

  /**
   * Scroll to top of the page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Handle navigation item clicks and scroll to respective sections
   * @param item - Section identifier
   */
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

      case SECTION.EXPERIENCE:
        scrollObject = {
          top: experienceRef.current?.offsetTop! - 70,
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
      {/* Page head with metadata */}
      <Head>
        <title>Sanskar Dewangan</title>
        <meta
          name="description"
          content="Hey, I'm Sanskar Dewangan a Software Developer from Bhilai Nagar, Chhattisgarh. Here's my portfolio where you can see all my projects, blogs, and achievements."
        />
        <meta name="author" content="Sanskar Dewangan" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Main content */}
      <main>
        {/* Navigation bar */}
        <Navbar onNavItemClick={handleNavItemClick} />

        {/* About section */}
        <AnimatedSection>
          <section className={SECTION.ABOUT}>
            <About />
          </section>
        </AnimatedSection>

        {/* Performance dashboard */}
        <AnimatedSection>
          <PerformanceDashboard />
        </AnimatedSection>

        {/* Experience section */}
        <section className="experience" ref={experienceRef}>
          <AnimatedSection>
            <Experience jobs={jobs} />
          </AnimatedSection>
        </section>

        {/* Projects section */}
        <section className={SECTION.PROJECTS} ref={projectsRef}>
          <AnimatedSection>
            <Projects projects={projects} />
          </AnimatedSection>
        </section>

        {/* Skills section */}
        <section className={SECTION.SKILLS} ref={skillsRef}>
          <AnimatedSection>
            <Skills skills={skills} />
          </AnimatedSection>
        </section>

        {/* Contact section */}
        <section className="contact" ref={contactRef}>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </section>

        {/* Footer */}
        <AnimatedSection>
          <Footer />
        </AnimatedSection>

        {/* Scroll to top button */}
        {isVisible && <Image src={ScrollUp.src} alt="Scroll Up" className="scroll-up" onClick={scrollToTop} width={40} height={40} style={{ cursor: 'pointer' }} />}

        {/* Toast notifications container */}
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

const PROJECTS_SKILLS_AND_JOBS_QUERY = gql`
  query GetProjectsSkillsAndJobs {
    projects {
      id
      title
      uniqueId
      description
      demoLink
      githubLink
      techStack { text }
      image { url }
    }
    skills {
      id
      uniqueId
      proficient
      skill
      url
      fieldType
      image { url }
    }
    jobs {
      id
      company
      designation
      from
      to
      logo { url }
      companyUrl
      companyLinkedin
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await client.query({ query: PROJECTS_SKILLS_AND_JOBS_QUERY });
    return {
      props: {
        skills: data.skills,
        projects: data.projects,
        jobs: data.jobs,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        skills: [] as ISkills[],
        projects: [] as IProjects[],
        jobs: [] as IJobs[],
      },
    };
  }
};
