import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__wrapper">
        <div className="projects__card">
          <h3 className="projects__card--title">
            Build an integrated question form
          </h3>
          <p className="projects__card--text">
            Question forms seem simple; but there is actually alot that has to
            happen behind the scenes. <br></br>My team and I were tasked with
            designing and building a component to be potentially integrated the{" "}
            <a className="projects__card--link" href="https://nailted.com/">
              client's
            </a>{" "}
            website.
          </p>
        </div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
        <div className="projects__card"></div>
      </div>
    </div>
  );
};

export default Projects;
