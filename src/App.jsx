import { useEffect, useState } from "react";
import "./App.css";
import content from "./content";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio-lang") || "de");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const next = saved === "light" || saved === "dark"
      ? saved
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = next;
    return next;
  });
  const t = content[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang, rtl]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site" dir={rtl ? "rtl" : "ltr"}>
      <Nav nav={t.nav} lang={lang} setLang={setLang} go={go} theme={theme} setTheme={setTheme} themeLabel={theme === "dark" ? t.themeLight : t.themeDark} />
      <main>
        <Hero t={t} go={go} />
        <About t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer footer={t.footer} go={go} />
    </div>
  );
}

export default App;
