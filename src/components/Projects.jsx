export default function Projects({ t }) {
  return (
    <section className="section projects" id="projects">
      <div className="section-head">
        <p>{t.projectsKicker}</p>
        <h2>{t.projectsTitle}</h2>
      </div>
      <div className="project-list">
        {t.projects.map((project) => (
          <article className="project-card" key={project.no}>
            <div className="project-no">{project.no}</div>
            <div className="project-body">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="project-link">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
              {project.note && <span>{project.note}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
