import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";
import Image from "next/image";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">No &copy; copyright issues. </p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <Image src={Github.src} alt="Github" onClick={() => window.open("https://github.com/SanskarDewangan", "_blank")} width={28} height={28} style={{ cursor: 'pointer' }} />
          <Image
            src={Linkedin.src}
            alt="Linkedin"
            onClick={() => window.open("https://www.linkedin.com/in/sanskar-dewangan/", "_blank")}
            width={28}
            height={28}
            style={{ cursor: 'pointer' }}
          />
          <Image
            src={Instagram.src}
            alt="Instagram"
            onClick={() => window.open("https://www.instagram.com/ig.sanskar_dewangan/", "_blank")}
            width={28}
            height={28}
            style={{ cursor: 'pointer' }}
          />
          <Image src={Gmail.src} alt="Gmail" onClick={() => window.open("mailto:d.sanskar014@gmail.com", "_blank")} width={28} height={28} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </footer>
  );
};
