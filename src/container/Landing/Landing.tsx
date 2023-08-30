import "./Landing.scss";
import social_Github from "../../assets/images/social-icons/social_github.svg";
import social_LinkedIn from "../../assets/images/social-icons/social_linkedin.svg";

const Landing = () => {
  return (
    <main className="landing">
      <div className="landing__wrapper">
        <h1 className="landing__name">Daniel Fernandez</h1>
        <h2 className="landing__title">Designer & Developer</h2>
        <div className="landing__social">
          <a
            href="https://github.com/Dfernandezcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="landing__social-icon"
              src={social_Github}
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dfernandezfoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="landing__social-icon"
              src={social_LinkedIn}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Landing;
