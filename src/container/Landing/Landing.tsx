import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__menu">
        <a href="#about" className="landing__menu--items">
          About
        </a>
        <a href="#skills" className="landing__menu--items">
          Skills
        </a>
        <a href="#projects" className="landing__menu--items">
          Projects
        </a>
        <a href="#experience" className="landing__menu--items">
          Work
        </a>
        <a href="#resume" className="landing__menu--items">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Landing;
