export default function Skills({ t }) {
  return (
    <section className="section skills" id="skills">
      <div className="section-head">
        <p>{t.skillsKicker}</p>
        <h2>{t.skillsTitle}</h2>
      </div>
      <div className="skills-grid">
        {t.skillGroups.map(([title, ...items]) => (
          <div className="skill-card" key={title}>
            <h3>{title}</h3>
            {items.map((item) => <p key={item}>{item}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
}
