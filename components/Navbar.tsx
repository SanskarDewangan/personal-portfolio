import type { NextPage } from "next";
import { useState } from "react";
import Moon from "../assets/moon.webp";
import Sun from "../assets/sun.webp";
import { SECTION, THEME } from "../typings";
import Image from "next/image";

interface INavbarProps {
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

export const Navbar: NextPage<INavbarProps> = ({ onNavItemClick = () => {}, switchTheme = () => {}, theme }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line line1"}></div>
          <div className={showSidebar ? "line line-2" : "line line2"}></div>
          <div className={showSidebar ? "line line-3" : "line line3"}></div>
        </div>

        <p className="navbar_name">
          <span>Sanskar Dewangan</span>
          <Image src={theme === THEME.LIGHT ? Sun.src : Moon.src} alt="Theme Icon" onClick={switchTheme} width={28} height={28} style={{ cursor: 'pointer' }} />
        </p>
        <div className="navbar_list">
          <p className="navbar_list_item" onClick={() => onNavItemClick(SECTION.ABOUT)}>
            About
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick(SECTION.PROJECTS)}>
            Projects
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick(SECTION.SKILLS)}>
            Skills
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick(SECTION.CONTACT)}>
            Contact
          </p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.PROJECTS)}>
          Projects
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.SKILLS)}>
          Skills
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.CONTACT)}>
          Contact
        </p>
      </div>
    </>
  );
};
