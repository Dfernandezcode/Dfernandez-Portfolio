import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about-card">
      <div className="about-card__wrapper">
        <h1 className="about-card__title">About me</h1>
        <p className="about-card__text">
          Hello! My name is Daniel and I enjoy creating things for the internet.
          My interest in web development started back in 2016 when I decided to
          try learning about UIUX design and what made websites work at Ironhack
          Madrid.
          <p>
            Jump forward to today, and I've just finished a year long course
            specializing in front-end development at The Valley Madrid and
            working on a project with my team for Nailted.
          </p>
          <p>
            I continue to learn new things and build accessible, inclusive
            products and digital experiences.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
