import "../Projects.scss";

const RickMorty_Project = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">
        <a className="projects__card--link" href="https://dfernandezcode.github.io/RickMorty-Wiki/" target="_blank" rel="noopener noreferrer">
          Rick & Morty wiki ↗
        </a>
      </h3>
      <p className="projects__card--text">
        Designed using the{" "}
        <a className="projects__card--link" href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
          Rick and Morty API ↗
        </a>{" "}
      </p>
      <div className="techbox">
        <p className="techbox__item">Javascript</p>
        <p className="techbox__item">HTML</p>
        <p className="techbox__item">CSS</p>
      </div>
    </div>
  );
};
export default RickMorty_Project;
