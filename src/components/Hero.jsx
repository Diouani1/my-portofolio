import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";

export default function Hero({ t, go }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><i /> {t.eyebrow}</p>
        <h1>{t.title1}<br /><em>{t.title2}</em></h1>
        <p className="lead">{t.intro}</p>
        <div className="actions">
          <button className="primary" onClick={() => go("projects")}>{t.work} <span>↘</span></button>
          <button className="secondary" onClick={() => go("contact")}>{t.contact}</button>
        </div>
        <div className="socials">
          <a href="https://github.com/Diouani1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
          <a href="https://www.linkedin.com/in/el-mokhtar-diouani-10a009124/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
          <a href="https://www.xing.com/profile/ElMokhtar_Diouani/cv" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXing} /> Xing</a>
        </div>
      </div>
      <div className="hero-art">
        <div className="code-card">
          <div className="code-top"><span /><span /><span /></div>
          <code>
            <small>01</small> const developer = &#123;<br />
            <small>02</small>&nbsp;&nbsp;name: <b>"El Mokhtar"</b>,<br />
            <small>03</small>&nbsp;&nbsp;focus: <b>"Full Stack"</b>,<br />
            <small>04</small>&nbsp;&nbsp;stack: [<b>"React"</b>, <b>"Node"</b>],<br />
            <small>05</small>&nbsp;&nbsp;ships: <b>true</b><br />
            <small>06</small> &#125;;
          </code>
        </div>
        <div className="status"><i />{t.available}</div>
      </div>
    </section>
  );
}
