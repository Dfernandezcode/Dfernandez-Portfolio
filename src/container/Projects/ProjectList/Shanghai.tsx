import "../Projects.scss";

const Shanghai = () => {
  return (
    <div className="projects__card">
      <h3 className="projects__card--title">
        <a href="https://shanghai-bpn.com/" className="projects__card--link" target="_blank" rel="noopener noreferrer">
          Restaurant website. ↗
        </a>
      </h3>
      <p className="projects__card--text">
        client wanted an update for an{" "}
        <a href="https://restoran-shanghai.business.site/" className="projects__card--link" target="_blank" rel="noopener noreferrer">
          older website ↗
        </a>{" "}
        along with easy to update menu and custom design built with React deployed on Hostinger.
      </p>
      <div className="techbox">
        <p className="techbox__item">React</p>
        <p className="techbox__item">HTML</p>
        <p className="techbox__item">SCSS</p>
        <p className="techbox__item">Typescript</p>
        <p className="techbox__item">Figma</p>
      </div>
    </div>
  );
};
export default Shanghai;
