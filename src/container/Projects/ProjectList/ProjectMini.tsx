import "../Projects.scss";

const ProjectMini = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">Mini-projects</h3>
      <p className="projects__card--text">
        Project work is a great way to learn and to consolidate my understanding
        of web development processes.
      </p>

      <p>This is a collection of mini-projects I've built.</p>
      <div>
        <ul>
          <li><a className="projects__card--btn" href="">Simple Weather App ↗</a></li>
        </ul>
        
      </div>
    </div>
  );
};
export default ProjectMini;
