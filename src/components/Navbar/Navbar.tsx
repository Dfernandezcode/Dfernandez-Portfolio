import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="nav">
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`nav-list ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <a href="#about" className="nav-list__link">
              About
            </a>
          </li>
          <li>
            <a href="#stack" className="nav-list__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-list__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-list__link">
              Work
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
