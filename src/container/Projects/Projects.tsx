// import Project_Games from "./ProjectList/Games";
import Project_Nailted from "./ProjectList/Nailted";
import Project_Mini from "./ProjectList/ProjectMini";
import RickMorty_Project from "./ProjectList/RickMorty";
import Project_Tmdb from "./ProjectList/Tmdb";
import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__wrapper">
        <RickMorty_Project />
        <Project_Tmdb />
        <Project_Mini />
        <Project_Nailted />
      </div>
    </div>
  );
};

export default Projects;
