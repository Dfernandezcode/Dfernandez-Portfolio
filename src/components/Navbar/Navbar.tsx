import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
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
