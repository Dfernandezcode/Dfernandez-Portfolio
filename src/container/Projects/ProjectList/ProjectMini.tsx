import "../Projects.scss";

const ProjectMini = () => {
  return (
    <div className="projects__card">
      <div>
        <h3 className="projects__card--title">Mini-projects</h3>
        <p className="projects__card--text">This is a collection of mini-projects I've built using a variety of technologies.</p>
  
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
