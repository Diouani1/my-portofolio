export default function Nav({ nav, lang, setLang, go, theme, setTheme, themeLabel }) {
  return (
    <header className="nav">
      <button className="brand" onClick={() => go("top")}>
        <span>EMD</span><b>.</b>
      </button>
      <nav>
        {["about", "projects", "skills", "contact"].map((id) => (
          <button key={id} onClick={() => go(id)}>{nav[id]}</button>
        ))}
      </nav>
      <div className="nav-tools">
        <div className="langs">
          {["en", "de", "ar"].map((code) => (
            <button className={lang === code ? "active" : ""} onClick={() => setLang(code)} key={code}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="theme" type="button" aria-label={themeLabel} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}
