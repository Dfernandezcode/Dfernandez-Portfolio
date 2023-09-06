import "../Projects.scss";

const Project_Tmdb = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">
        Movie wiki website with quiz component ↗
      </h3>
      <p className="projects__card--text">
        This project used react hooks and api requests to build a functional
        movie wiki website.<br></br> I used the{" "}
        <a
          className="projects__card--link"
          href="https://developer.themoviedb.org/reference/search-movie"
        >
          TMDB API ↗
        </a>{" "}
        to fetch movie data and dyanmically generate content as well as a quiz
        component that users can play with.
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
