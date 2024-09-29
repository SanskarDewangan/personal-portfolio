import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">No &copy; copyright issues. </p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
          <img src={Github.src} alt="" onClick={() => window.open("https://github.com/SanskarDewangan", "_blank")} />
          <img
            src={Linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/sanskar-dewangan/", "_blank")}
          />
          <img
            src={Instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/ig.sanskar_dewangan/", "_blank")}
          />
          <img src={Gmail.src} alt="" onClick={() => window.open("mailto:d.sanskar014@gmail.com", "_blank")} />
        </div>
      </div>
    </footer>
  );
};
