import "./Landing.scss";
import social_Github from "../../assets/images/social-icons/social_github.svg";
import social_LinkedIn from "../../assets/images/social-icons/social_linkedin.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__wrapper">
        <h1>Daniel Fernandez</h1>
        <h2>Web designer & developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia.
        </p>
        <div className="landing__social">
          <img src={social_Github} alt="Github" />
          <img src={social_LinkedIn} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
