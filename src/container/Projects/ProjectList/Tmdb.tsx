import "../Projects.scss";

const Project_Tmdb = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">
        <a className="projects__card--link" href="https://thedbmovie.netlify.app/" target="_blank" rel="noopener noreferrer">
          Movie wiki ↗
        </a>
      </h3>
      <p className="projects__card--text">
        Developed using the{" "}
        <a className="projects__card--link" href="https://developer.themoviedb.org/reference/search-movie" target="_blank" rel="noopener noreferrer">
          TMDB API ↗
        </a>{" "}
        with React and supporting technologies.
      </p>
      <div className="techbox">
        <p className="techbox__item">React</p>
        <p className="techbox__item">HTML</p>
        <p className="techbox__item">SCSS</p>
      </div>
    </div>
  );
};
export default Project_Tmdb;
