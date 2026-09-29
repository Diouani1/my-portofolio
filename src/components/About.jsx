import portrait from "../assets/img/portrait.png";

export default function About({ t }) {
  return (
    <section className="section about" id="about">
      <div className="section-head">
        <p>{t.aboutKicker}</p>
        <h2>{t.aboutTitle}</h2>
      </div>
      <div className="about-grid">
        <p className="about-copy">
          <img className="portrait" src={portrait} alt="El Mokhtar Diouani" />
          {t.aboutText}
        </p>
        <div className="stats">
          {t.stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
