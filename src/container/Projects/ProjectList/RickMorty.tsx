import "../Projects.scss";

const RickMorty_Project = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title"><a className="projects__card--link" href="https://dfernandezcode.github.io/RickMorty-Wiki/" target="_blank" rel="noopener noreferrer">Rick & Morty Wiki  ↗
</a></h3>
      <p className="projects__card--text">
        Using the{" "}
        <a className="projects__card--link" href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
          Rick and Morty API ↗
        </a>{" "}
        , I was tasked with building out a functioning wiki using only basic Javascript, CSS and HTML.
      </p>
      <p className="projects__card--text">It was a great project to practice and consolidate my Javascript skills.</p>
    </div>
  );
};
export default RickMorty_Project;