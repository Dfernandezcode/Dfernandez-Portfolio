import Project_Games from "./ProjectList/Games";
import Project_Nailted from "./ProjectList/Nailted";
import Project_TaskManager from "./ProjectList/TaskManager";
import Project_Tmdb from "./ProjectList/Tmdb";
import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__wrapper">
        <Project_Nailted />
        <Project_Games />
        <Project_Tmdb />
        <Project_TaskManager />
      </div>
    </div>
  );
};

export default Projects;
