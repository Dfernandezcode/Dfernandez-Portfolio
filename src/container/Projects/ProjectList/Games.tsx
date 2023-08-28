import "../Projects.scss";

const Project_Games = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">Video game discovery webapp ↗</h3>
      <p className="projects__card--text">
        Using the{" "}
        <a className="projects__card--link" href="https://rawg.io/apidocs">
          RAWG API ↗
        </a>{" "}
        , I decided to test my react skills to build a webapp allowing users to
        search and discover new games. This project has various features
        implemented such as skeleton loaders, search filtering and UIUX details
        like dark and light mode.
      </p>
    </div>
  );
};
export default Project_Games;
