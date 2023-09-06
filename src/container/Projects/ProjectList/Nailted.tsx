import "../Projects.scss";

const Project_Nailted = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">
        <a href="https://nailted-form-front.onrender.com/" className="projects__card--link" target="_blank" rel="noopener noreferrer">
          Company performance question form ↗
        </a>
      </h3>
      <p className="projects__card--text">Building a question form can seem simple; but alot has to happen behind the scenes.</p>
      <p className="projects__card--text">
        My team and I were tasked with designing and building a{" "}
        <a href="https://nailted-form-front.onrender.com/" className="projects__card--link" target="_blank" rel="noopener noreferrer">
          question form ↗
        </a>{" "}
        to be potentially integrated the{" "}
        <a className="projects__card--link" href="https://nailted.com/" target="_blank" rel="noopener noreferrer">
          client's ↗
        </a>{" "}
        website.
      </p>
      <div className="techbox">
        <p className="techbox__item">React</p>
        <p className="techbox__item">HTML</p>
        <p className="techbox__item">SCSS</p>
        <p className="techbox__item">Typescript</p>
        <p className="techbox__item">Node.js</p>
        <p className="techbox__item">Postman</p>
        <p className="techbox__item">Figma</p>
      </div>
    </div>
  );
};
export default Project_Nailted;
