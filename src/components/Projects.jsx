import { projects } from "../data/projects";
import "./../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="tags">
              {p.tech.map((t) => <span key={t}>{t}</span>)}
            </div>

            <a className="btn-small" target = "_blank" href={p.link}>View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}
