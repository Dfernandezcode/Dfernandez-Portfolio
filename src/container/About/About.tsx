import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about-card">
      <h1 className="about-card__header">About Me</h1>
      <div className="about-card__wrapper">
        <p className="about-card__text">
          Back in 2016, I decided to start exploring the world of UIUX design at <a href="https://www.ironhack.com/es/en" className="about-card__text--bold">Ironhack ↗</a> Madrid
          causing me to fall head first into the world of coding and web development.
          Today, and I've had the privilege of finishing a web development
          masters at <a href="https://thevalley.es/" className="about-card__text--bold">The Valley Business School ↗</a> and building software for a web
          consultancy: <a href="https://nailted.com/" className="about-card__text--bold">Nailted ↗</a>.</p> 
          
          <p className="about-card__text">My main focus these days is to improve my code
          further and developing projects. I continue to expand my
          understanding of web development and improve my techstack. I aim to
          build accessible, inclusive products and digital experiences.</p>
          
          <p className="about-card__text">When I'm
          not on the computer, I'm usually at the gym, hanging out on discord
          with my friends and two pet birds, or visiting one of the numerous
          galleries around Madrid.</p> 
      </div>
    </div>
  );
};

export default About;
