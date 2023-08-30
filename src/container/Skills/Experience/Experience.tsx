import "./Experience.scss";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__header">Experience</h2>
      <div className="experience__wrapper">
        <div className="experience__subheaders">
          <h3 className="experience__subheaders--position">Language teacher</h3>
          <p  className="experience__subheaders--company">International House | Cambridge Exams</p>
          
        </div>
        <p  className="experience__subheaders--dates">2016 - present</p>
      </div>
      <ul className="experience__points">
      <li>
            Cambridge certified examiner for levels A2-C1.
        </li>
        <li>
            Organized classes of 5-15 students with a wide range of ages and levels while maintaining a pass rate of 95%.
        </li>
        <li>
            Analyzing student abilities, providing feedback while documenting progress and tracking student development term by term.
        </li>
        <li>
            Followed objects and goals laid out by Cambrdiges University and the Common European Framework of Reference for Languages.
        </li>
        <li>
            Over 3000 hours of contact-teaching and classroom management.
        </li>
      </ul>
    </section>
  );
};

export default Experience;
