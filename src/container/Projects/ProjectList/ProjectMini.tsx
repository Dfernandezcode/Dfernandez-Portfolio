import "../Projects.scss";

const ProjectMini = () => {
  return (
    <div className="projects__card">
      <div>
        <h3 className="projects__card--title">Mini-projects</h3>
        <p className="projects__card--text">A collection of mini-projects I've built using a variety of technologies to consolidate web development concepts.</p>

        <p className="projects__card--disclaimer">
          * Please give it some time to load. Free via{" "}
          <a className="projects__card--link" href="https://render.com/" target="_blank" rel="noopener noreferrer">
            Render↗
          </a>{" "}
          causes the load time to be...less than optimal.
        </p>
      </div>

      <div>
        <ul className="projects__card--mini">
          <li>
            <a className="projects__card--link" href="https://simplejsweather.onrender.com/" target="_blank" rel="noopener noreferrer">
              Simple Weather App ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProjectMini;
