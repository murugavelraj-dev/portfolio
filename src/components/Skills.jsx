import { skills } from "../data/skills";
import "./../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <span>{s.icon}</span>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
