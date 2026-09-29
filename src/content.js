const content = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    eyebrow: "Full-Stack Developer · Germany",
    title1: "I build practical",
    title2: "web applications.",
    intro: "I create reliable web experiences from interface to API and database, with a focus on clean architecture, maintainable code and real-world usability.",
    work: "View my work",
    contact: "Contact me",
    available: "Open to opportunities",
    aboutKicker: "About",
    aboutTitle: "More than code — I build solutions for real workflows.",
    aboutText: "I'm El Mokhtar Diouani, a full-stack developer working with modern JavaScript technologies. I enjoy turning real requirements into clear interfaces, dependable backend services and well-structured data. My recent work includes an internal attendance management system, multilingual interfaces and Docker-based deployments.",
    stats: [["3", "Languages"], ["Full Stack", "Frontend → Database"], ["Docker", "Deployment experience"]],
    projectsKicker: "Selected work",
    projectsTitle: "Projects built around real problems.",
    projects: [
      { no: "01", title: "Anwesenheit", type: "Internal attendance & kiosk system", text: "A full-stack attendance system developed for a music school and operated inside the company’s local network. Students use a dedicated touchscreen kiosk to sign in and out, while authorized staff manage courses, participants, absence statuses and attendance through a protected admin interface.", tags: ["React", "Node.js", "Prisma", "MariaDB", "Docker"], note: "Internal company application · No public demo" },
      { no: "02", title: "Portfolio", type: "Multilingual web portfolio", text: "This portfolio, redesigned as a responsive multilingual React experience with English, German and Arabic support and a maintainable shared component structure.", tags: ["React", "Responsive UI", "i18n"], live: "https://www.diouani-mokhtar.de/", github: "https://github.com/Diouani1/my-portofolio" }
    ],
    skillsKicker: "Toolkit",
    skillsTitle: "Technologies I work with.",
    skillGroups: [
      ["Frontend", "React", "JavaScript", "HTML / CSS", "Bootstrap"],
      ["Backend", "Node.js", "Express", "REST APIs", "Authentication"],
      ["Data", "Prisma", "MariaDB / MySQL", "MongoDB", "Data modeling"],
      ["Tools & Delivery", "Docker", "Git / GitHub", "NPM", "Linux / SSH"]
    ],
    contactKicker: "Contact",
    contactTitle: "Have a project or opportunity? Let's talk.",
    contactText: "Send me a message and tell me what you're working on. I'll get back to you as soon as I can.",
    form: { name: "Your name", email: "Email address", message: "Your message", send: "Send message" },
    footer: "Designed & built by El Mokhtar Diouani",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode"
  },
  de: {
    nav: { about: "Über mich", projects: "Projekte", skills: "Skills", contact: "Kontakt" },
    eyebrow: "Full-Stack-Entwickler · Deutschland",
    title1: "Ich entwickle praktische",
    title2: "Webanwendungen.",
    intro: "Ich entwickle zuverlässige Webanwendungen vom Interface über APIs bis zur Datenbank – mit Fokus auf klare Architektur, wartbaren Code und echte Nutzbarkeit.",
    work: "Projekte ansehen",
    contact: "Kontakt",
    available: "Offen für neue Möglichkeiten",
    aboutKicker: "Über mich",
    aboutTitle: "Mehr als Code – ich entwickle Lösungen für echte Arbeitsabläufe.",
    aboutText: "Ich bin El Mokhtar Diouani, Full-Stack-Entwickler mit Schwerpunkt auf modernen JavaScript-Technologien. Ich übersetze reale Anforderungen in übersichtliche Oberflächen, zuverlässige Backend-Services und gut strukturierte Daten. Zu meinen aktuellen Arbeiten gehören ein internes Anwesenheitsmanagementsystem, mehrsprachige Oberflächen und Docker-basierte Deployments.",
    stats: [["3", "Sprachen"], ["Full Stack", "Frontend → Datenbank"], ["Docker", "Deployment-Erfahrung"]],
    projectsKicker: "Ausgewählte Arbeiten",
    projectsTitle: "Projekte für reale Anforderungen.",
    projects: [
      { no: "01", title: "Anwesenheit", type: "Internes Anwesenheits- & Kiosksystem", text: "Ein Full-Stack-Anwesenheitssystem für eine Musikschule, das ausschließlich im lokalen Firmennetzwerk betrieben wird. Schüler melden sich über einen dedizierten Touchscreen-Kiosk an und ab; autorisierte Mitarbeitende verwalten Kurse, Teilnehmer, Fehlzeiten und Anwesenheiten über einen geschützten Adminbereich.", tags: ["React", "Node.js", "Prisma", "MariaDB", "Docker"], note: "Interne Firmenanwendung · Keine öffentliche Demo" },
      { no: "02", title: "Portfolio", type: "Mehrsprachiges Web-Portfolio", text: "Dieses Portfolio als responsive React-Anwendung mit Englisch, Deutsch und Arabisch sowie einer wartbaren gemeinsamen Komponentenstruktur.", tags: ["React", "Responsive UI", "i18n"], live: "https://www.diouani-mokhtar.de/", github: "https://github.com/Diouani1/my-portofolio" }
    ],
    skillsKicker: "Toolkit",
    skillsTitle: "Technologien, mit denen ich arbeite.",
    skillGroups: [
      ["Frontend", "React", "JavaScript", "HTML / CSS", "Bootstrap"],
      ["Backend", "Node.js", "Express", "REST APIs", "Authentifizierung"],
      ["Daten", "Prisma", "MariaDB / MySQL", "MongoDB", "Datenmodellierung"],
      ["Tools & Delivery", "Docker", "Git / GitHub", "NPM", "Linux / SSH"]
    ],
    contactKicker: "Kontakt",
    contactTitle: "Projekt oder Jobmöglichkeit? Lassen Sie uns sprechen.",
    contactText: "Schreiben Sie mir kurz, woran Sie arbeiten. Ich melde mich so schnell wie möglich zurück.",
    form: { name: "Ihr Name", email: "E-Mail-Adresse", message: "Ihre Nachricht", send: "Nachricht senden" },
    footer: "Entworfen & entwickelt von El Mokhtar Diouani",
    themeLight: "Zum hellen Modus wechseln",
    themeDark: "Zum dunklen Modus wechseln"
  },
  ar: {
    nav: { about: "نبذة عني", projects: "المشاريع", skills: "المهارات", contact: "تواصل" },
    eyebrow: "مطور Full-Stack · ألمانيا",
    title1: "أبني تطبيقات ويب",
    title2: "عملية وموثوقة.",
    intro: "أطوّر تجارب ويب متكاملة من الواجهة إلى الـ API وقاعدة البيانات، مع التركيز على بنية واضحة وكود قابل للصيانة واستخدام عملي.",
    work: "شاهد مشاريعي",
    contact: "تواصل معي",
    available: "متاح لفرص جديدة",
    aboutKicker: "نبذة عني",
    aboutTitle: "أكثر من مجرد كود — أبني حلولاً لمتطلبات حقيقية.",
    aboutText: "أنا المختار ديواني، مطور Full-Stack أعمل بتقنيات JavaScript الحديثة. أحب تحويل المتطلبات الواقعية إلى واجهات واضحة وخدمات خلفية موثوقة وبيانات منظمة. تشمل أعمالي الحديثة نظاماً داخلياً لإدارة الحضور، وواجهات متعددة اللغات، ونشر التطبيقات باستخدام Docker.",
    stats: [["3", "لغات"], ["Full Stack", "من الواجهة إلى قاعدة البيانات"], ["Docker", "خبرة في النشر"]],
    projectsKicker: "أعمال مختارة",
    projectsTitle: "مشاريع مبنية لحل مشاكل حقيقية.",
    projects: [
      { no: "01", title: "Anwesenheit", type: "نظام داخلي للحضور والكشك", text: "نظام Full-Stack للحضور تم تطويره لمدرسة موسيقى ويعمل داخل الشبكة المحلية للشركة فقط. يستخدم الطلاب كشكاً مخصصاً بشاشة لمس لتسجيل الدخول والخروج، بينما يدير الموظفون المخولون الدورات والطلاب وحالات الغياب والحضور من لوحة إدارة محمية.", tags: ["React", "Node.js", "Prisma", "MariaDB", "Docker"], note: "تطبيق داخلي للشركة · لا توجد نسخة عامة" },
      { no: "02", title: "Portfolio", type: "ملف أعمال متعدد اللغات", text: "هذا الموقع بعد إعادة تصميمه كتجربة React متجاوبة تدعم الإنجليزية والألمانية والعربية ببنية مكونات مشتركة وسهلة الصيانة.", tags: ["React", "Responsive UI", "i18n"], live: "https://www.diouani-mokhtar.de/", github: "https://github.com/Diouani1/my-portofolio" }
    ],
    skillsKicker: "الأدوات",
    skillsTitle: "التقنيات التي أعمل بها.",
    skillGroups: [
      ["Frontend", "React", "JavaScript", "HTML / CSS", "Bootstrap"],
      ["Backend", "Node.js", "Express", "REST APIs", "Authentication"],
      ["البيانات", "Prisma", "MariaDB / MySQL", "MongoDB", "Data modeling"],
      ["الأدوات والنشر", "Docker", "Git / GitHub", "NPM", "Linux / SSH"]
    ],
    contactKicker: "تواصل",
    contactTitle: "لديك مشروع أو فرصة عمل؟ لنتحدث.",
    contactText: "أرسل لي رسالة وأخبرني بما تعمل عليه، وسأرد عليك في أقرب وقت ممكن.",
    form: { name: "اسمك", email: "البريد الإلكتروني", message: "رسالتك", send: "إرسال الرسالة" },
    footer: "تصميم وتطوير المختار ديواني",
    themeLight: "التبديل إلى الوضع الفاتح",
    themeDark: "التبديل إلى الوضع الداكن"
  }
};

export default content;
