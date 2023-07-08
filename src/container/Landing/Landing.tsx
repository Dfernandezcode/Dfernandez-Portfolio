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

{
  /* <div className="landing">
      <div className="landing-box">
        <p className="landing-box__intro">Hey there! my name is</p>
        <h1 className="landing-box__name">Daniel Fernandez.</h1>
        <h1 className="landing-box__subtitle">I build web experiences.</h1>
        <p className="landing-box__text">
          I'm a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. At present, my primary
          focus revolves around crafting accessible and human-centered products.{" "}
        </p>
        <a className="landing-box__link">Check out some of my work!</a>
      </div>
    </div> */
}
