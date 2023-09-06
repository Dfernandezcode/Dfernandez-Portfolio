import React, { useState } from "react";
import "./Navbar.scss";

interface NavbarProps {
  setActiveCard: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveCard }) => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list--li">
            <a
              href="#about"
              className="nav__list--link"
              onClick={() => {
                setActiveCard("about");
                setSelectedLink("about");
              }}
            >
              {selectedLink === "about" ? "•" : "About"}
            </a>
          </li>
          <li className="nav__list--li">
            <a
              href="#skills"
              className="nav__list--link"
              onClick={() => {
                setActiveCard("skills");
                setSelectedLink("skills");
              }}
            >
              {selectedLink === "skills" ? "•" : "Skills & Education"}
            </a>
          </li>
          <li className="nav__list--li">
            <a
              href="#projects"
              className="nav__list--link"
              onClick={() => {
                setActiveCard("projects");
                setSelectedLink("projects");
              }}
            >
              {selectedLink === "projects" ? "•" : "Projects"}
            </a>
          </li>
          <li className="nav__list--li">
            <a
              href="#contact"
              className="nav__list--link"
              onClick={() => {
                setActiveCard("contact");
                setSelectedLink("contact");
              }}
            >
              {selectedLink === "contact" ? "•" : "Contact"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
