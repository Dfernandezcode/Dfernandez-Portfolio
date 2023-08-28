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
        <ul className="nav-list">
          <li>
            <a
              href="#about"
              className="nav-list__link"
              onClick={() => {
                setActiveCard("about");
                setSelectedLink("about");
              }}
            >
              {selectedLink === "about" ? "•" : "About"}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav-list__link"
              onClick={() => {
                setActiveCard("skills");
                setSelectedLink("skills");
              }}
            >
              {selectedLink === "skills" ? "•" : "Skills"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="nav-list__link"
              onClick={() => {
                setActiveCard("projects");
                setSelectedLink("projects");
              }}
            >
              {selectedLink === "projects" ? "•" : "Projects"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-list__link"
              onClick={() => {
                setActiveCard("contact");
                setSelectedLink("contact");
              }}
            >
              {selectedLink === "contact" ? "•" : "Contact"}
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-list__button">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
