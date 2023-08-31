import icon_html5 from "../../../assets/images/techstack-icons/icon_html5.svg";
import icon_css from "../../../assets/images/techstack-icons/icon_css.svg";
import icon_JS from "../../../assets/images/techstack-icons/icon_JS.svg";
import icon_React from "../../../assets/images/techstack-icons/icon_React.svg";
import icon_Sass from "../../../assets/images/techstack-icons/icon_Sass.svg";
import icon_ViteJS from "../../../assets/images/techstack-icons/icon_ViteJS.svg";
import icon_TS from "../../../assets/images/techstack-icons/icon_TS.svg";
import icon_NodeJS from "../../../assets/images/techstack-icons/icon_NodeJS.svg";
import icon_Postman from "../../../assets/images/techstack-icons/icon_Postman.svg";
import icon_Figma from "../../../assets/images/techstack-icons/icon_Figma.svg";
import icon_PS from "../../../assets/images/techstack-icons/icon_PS.svg";
import icon_Docker from "../../../assets/images/techstack-icons/icon_Docker.svg";
import "../Skills.scss"

const Stack = () => {
  return (
    <section className="stack__section">
      <h2 className="stack__header section__header">Techstack</h2>
      <div className="stack__icons">
        <img className="stack__icons-logo" src={icon_html5} alt="HTML5" />
        <img className="stack__icons-logo" src={icon_css} alt="CSS" />
        <img className="stack__icons-logo" src={icon_JS} alt="JS3" />
        <img className="stack__icons-logo" src={icon_TS} alt="Typescript" />

        <img className="stack__icons-logo" src={icon_React} alt="React" />
        <img className="stack__icons-logo" src={icon_ViteJS} alt="ViteJS" />
        <img className="stack__icons-logo" src={icon_Sass} alt="Sass" />
        <img className="stack__icons-logo" src={icon_NodeJS} alt="NodeJS" />
        <img
          className="stack__icons-logo"
          src={icon_Postman}
          alt="Postman"
        />
        <img className="stack__icons-logo" src={icon_Figma} alt="Figma" />
        <img className="stack__icons-logo" src={icon_PS} alt="Photoshop" />
        <img className="stack__icons-logo" src={icon_Docker} alt="Docker" />
      </div>
    </section>
  );
};

export default Stack;
