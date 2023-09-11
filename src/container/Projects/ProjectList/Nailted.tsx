import "../Projects.scss";

const Project_Nailted = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">
        <a href="https://nailted-form-front.onrender.com/" className="projects__card--link" target="_blank" rel="noopener noreferrer">
          Integrated question form ↗
        </a>
      </h3>
      <p className="projects__card--text">
        Fullstack project for <a className="projects__card--link">Nailted ↗</a> with supervision from{" "}
        <a className="projects__card--link" href="https://clouddistrict.com/">
          Cloud District ↗
        </a>{" "}
        with React and supporting technologies.
      </p>

      <p className="projects__card--disclaimer">
        * Please give it some time to load. Free via{" "}
        <a className="projects__card--link" href="https://render.com/" target="_blank" rel="noopener noreferrer">
          Render↗
        </a>{" "}
        causes the load time to be...less than optimal.
      </p>

      <div className="techbox">
        <p className="techbox__item">React</p>
        <p className="techbox__item">HTML</p>
        <p className="techbox__item">SCSS</p>
        <p className="techbox__item">Typescript</p>
        <p className="techbox__item">Node.js</p>
        <p className="techbox__item">MongoDB</p>
        <p className="techbox__item">Postman</p>
        <p className="techbox__item">Figma</p>
      </div>
    </div>
  );
};
export default Project_Nailted;
