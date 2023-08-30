import "./Skills.scss";
import icon_html5 from "../../assets/images/techstack-icons/icon_html5.svg";
import icon_css from "../../assets/images/techstack-icons/icon_css.svg";
import icon_JS from "../../assets/images/techstack-icons/icon_JS.svg";
import icon_React from "../../assets/images/techstack-icons/icon_React.svg";
import icon_Sass from "../../assets/images/techstack-icons/icon_Sass.svg";
import icon_ViteJS from "../../assets/images/techstack-icons/icon_ViteJS.svg";
import icon_TS from "../../assets/images/techstack-icons/icon_TS.svg";
import icon_NodeJS from "../../assets/images/techstack-icons/icon_NodeJS.svg";
import icon_Postman from "../../assets/images/techstack-icons/icon_Postman.svg";
import icon_Figma from "../../assets/images/techstack-icons/icon_Figma.svg";
import icon_PS from "../../assets/images/techstack-icons/icon_PS.svg";
import icon_Docker from "../../assets/images/techstack-icons/icon_Docker.svg";
import Experience from "./Experience/Experience";

const Techstack = () => {
  return (
    <div id="stack" className="skills">
      <section className="techstack">
        <h2 className="techstack__header">Techstack</h2>
        <div className="techstack__icons">
          <img className="techstack__icons-logo" src={icon_html5} alt="HTML5" />
          <img className="techstack__icons-logo" src={icon_css} alt="CSS" />
          <img className="techstack__icons-logo" src={icon_JS} alt="JS3" />
          <img className="techstack__icons-logo" src={icon_TS} alt="Typescript" />

          <img className="techstack__icons-logo" src={icon_React} alt="React" />
          <img className="techstack__icons-logo" src={icon_ViteJS} alt="ViteJS" />
          <img className="techstack__icons-logo" src={icon_Sass} alt="Sass" />
          <img className="techstack__icons-logo" src={icon_NodeJS} alt="NodeJS" />
          <img
            className="techstack__icons-logo"
            src={icon_Postman}
            alt="Postman"
          />
          <img className="techstack__icons-logo" src={icon_Figma} alt="Figma" />
          <img className="techstack__icons-logo" src={icon_PS} alt="Photoshop" />
          <img className="techstack__icons-logo" src={icon_Docker} alt="Docker" />
        </div>
      </section>
      <section className="languages">
        <h2 className="skills__header">Languages</h2>
        <p className="skills__languages">English</p>
        <p className="skills__languages">Spanish</p>
        <p className="skills__languages">Indonesian</p>
      </section>
      <section className="experience">
        <Experience />
      </section>
    </div>
  );
};

export default Techstack;
