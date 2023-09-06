import "../Skills.scss"
const Education = () => {
  return (
    <section id="experience" className="education__section section__wrapper">
      <h2 className="education__header section__header">Education</h2>
      <div className="education__wrapper">
        <div className="education__subheader">
          <h3 className="education__title">
            TheValley Business School
          </h3>
          <p className="education__dates">2023</p>
        </div>
        <p className="education__description">
          Master in Web Development - Full Stack.
        </p>
      </div>
      <div className="education__wrapper">
      <div className="education__subheader">
          <h3 className="education__title">
            IronHack Madrid
          </h3>
          <p className="education__dates">2021</p>
        </div>
        <p className="education__description">
          Master in UIUX Development
        </p>
      </div>
      <div className="education__wrapper">
      <div className="education__subheader">
          <h3 className="education__title">
            International House Madrid
          </h3>
          <p className="education__dates">2016</p>
        </div>
        <p className="education__description">
          CELTA Teacher Certification
        </p>
      </div>
      <div className="education__wrapper">
      <div className="education__subheader">
          <h3 className="education__title">
            University of Edinburgh | UK
          </h3>
          <p className="education__dates">2013</p>
        </div>
        <p className="education__description">
          BSc Political Science & Anthropology 
        </p>
      </div>
      
    </section>
  );
  };
  

export default Education;
