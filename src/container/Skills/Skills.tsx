import "./Skills.scss";
import Education from "./SkillsSections/Education";
import Stack from "./SkillsSections/Stack";
import Languages from "./SkillsSections/Languages";

const Skills = () => {
  return (
    <section id="stack" className="skills">
      <div className="stack languages skills__section">
        <Stack />
        <Languages />
      </div>
      <div className="experience skills__section">
        <Education />
      </div>
    </section>
  );
};

export default Skills;
