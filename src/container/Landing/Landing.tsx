import "./Landing.scss";
import social_Github from "../../assets/images/social-icons/social_github.svg";
import social_GithubLight from "../../assets/images/social-icons/social_github-black.svg";
import social_LinkedIn from "../../assets/images/social-icons/social_linkedIn.svg";
import social_LinkedInLight from "../../assets/images/social-icons/social_linkedIn-black.svg";

interface Props {
  theme: string;
}
const Landing: React.FC<Props> = ({ theme }) => {
  return (
    <main className="landing">
      <div className="landing__wrapper">
        <a className="landing__link" href="index.html">
          <h1 className="landing__name">Daniel Fernandez</h1>
        </a>
        <h2 className="landing__title">Designer & Developer</h2>
        <div className="landing__social">
          <a href="https://github.com/Dfernandezcode" target="_blank" rel="noopener noreferrer">
            <img className="landing__social-icon" src={theme === "dark" ? social_Github : social_GithubLight} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/dfernandezfoe/" target="_blank" rel="noopener noreferrer">
            <img className="landing__social-icon" src={theme === "dark" ? social_LinkedIn : social_LinkedInLight} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Landing;
