import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { TypingAnimation } from "./TypingAnimation";

/**
 * About Component
 * Displays personal information, introduction, and social links
 */
export const About: NextPage = () => {
  return (
    <>
      {/* Left section with introduction and social links */}
      <div className="about_left">
        {/* Name with typing animation */}
        <AnimatedSection delay={0.2}>
          <h1 className="about_left_head">
            Hi, I&#39;m <TypingAnimation text="Sanskar Dewangan" speed={150} />
          </h1>
        </AnimatedSection>
        
        {/* About text */}
        <AnimatedSection delay={0.4}>
          <p className="about_left_text">
          I&#39;m a recent Computer Science graduate with a Bachelor of Engineering in Computer Science and Engineering from Sir MVIT, Bengaluru. I have a strong foundation in software development, data structures, and system design, with hands-on experience building full-stack applications and solving real-world problems through clean, efficient code.
          <br/>
          <br />
          Driven by curiosity and a passion for technology, I continuously strive to improve my skills and stay updated with industry best practices. I&#39;m actively seeking a Software Engineer role where I can contribute to impactful projects, collaborate with talented teams, and grow into a well-rounded developer.
          </p>
        </AnimatedSection>
        
        {/* Social media links */}
        <AnimatedSection delay={0.6}>
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
        </AnimatedSection>
        
        {/* GitHub star button */}
        <AnimatedSection delay={0.8}>
          <div
            className="about_left_starme"
            onClick={() => window.open("https://github.com/SanskarDewangan/personal-portfolio", "_blank")}
          >
            ⭐ Star Me On Github
          </div>
        </AnimatedSection>
      </div>
      
      {/* Right section with profile picture */}
      <div className="about_right">
        <AnimatedSection direction="right" delay={0.3}>
          <div className="about_right_profilePic" />
        </AnimatedSection>
      </div>
    </>
  );
};
