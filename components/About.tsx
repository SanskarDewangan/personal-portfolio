import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";
import Image from "next/image";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Sanskar Dewangan</h1>
        <p className="about_left_text">
        I am a dedicated 4th-year student pursuing a Bachelor of Engineering in Computer Science (B.E. in CSE), expected to graduate in [05, 2025].<br/>
        With a strong foundation in programming and software development, I am eager to showcase my skills and projects that reflect my commitment to excellence and innovation.
         I am looking for opportunities that allow me to contribute to impactful projects and grow as a tech professional.
        </p>
        <div className="about_left_socialMedia">
          <Image src={github.src} alt="Github" onClick={() => window.open("https://github.com/SanskarDewangan", "_blank")} width={28} height={28} style={{ cursor: 'pointer' }} />
          <Image
            src={linkedin.src}
            alt="Linkedin"
            onClick={() => window.open("https://www.linkedin.com/in/sanskar-dewangan/", "_blank")}
            width={28}
            height={28}
            style={{ cursor: 'pointer' }}
          />
          <Image
            src={instagram.src}
            alt="Instagram"
            onClick={() => window.open("https://www.instagram.com/ig.sanskar_dewangan/", "_blank")}
            width={28}
            height={28}
            style={{ cursor: 'pointer' }}
          />
          <Image src={gmail.src} alt="Gmail" onClick={() => window.open("mailto:d.sanskar014@gmail.com", "_blank")} width={28} height={28} style={{ cursor: 'pointer' }} />
        </div>
        <div
          className="about_left_starme"
          onClick={() => window.open("https://github.com/SanskarDewangan/personal-portfolio", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
