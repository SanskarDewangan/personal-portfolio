import type { NextPage } from "next";
import { useState } from "react";
import Moon from "../assets/moon.webp";
import Sun from "../assets/sun.webp";
import { SECTION } from "../typings";
import Image from "next/image";
import { useTheme } from "next-themes";

interface INavbarProps {
  onNavItemClick: (item: string) => void;
}

/**
 * Navbar Component
 * Displays navigation menu and theme toggle
 *
 * @param onNavItemClick - Function to handle navigation item clicks
 */
export const Navbar: NextPage<INavbarProps> = ({ onNavItemClick = () => {} }) => {
  // State for sidebar visibility on mobile
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  
  // Theme context
  const { theme, setTheme } = useTheme();

  // Check if current theme is light
  const isLight = theme === "light" || !theme;

  return (
    <>
      {/* Main navigation bar */}
      <nav className="navbar">
        {/* Mobile menu toggle */}
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

        {/* Name and theme toggle */}
        <p className="navbar_name">
          <span>Sanskar Dewangan</span>
          <Image
            src={isLight ? Sun.src : Moon.src}
            alt="Theme Icon"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            width={28}
            height={28}
            style={{ cursor: 'pointer' }}
          />
        </p>
        
        {/* Desktop navigation items */}
        <div className="navbar_list">
          <p className="navbar_list_item" onClick={() => onNavItemClick(SECTION.ABOUT)}>
            About
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick(SECTION.EXPERIENCE)}>
            Experience
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

      {/* Mobile sidebar */}
      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick(SECTION.EXPERIENCE)}>
          Experience
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
