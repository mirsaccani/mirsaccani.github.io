const buttons = document.querySelectorAll(".menu-button");
const sections = document.querySelectorAll(".content-section");

function showSection(sectionId) {
  buttons.forEach((button) => {
    const isActive = button.dataset.section === sectionId;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  sections.forEach((section) => {
    const isActive = section.id === sectionId;

    section.classList.toggle("active", isActive);
    section.setAttribute("aria-hidden", String(!isActive));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showSection(button.dataset.section);
  });
});


/* LANGUAGE */

const translations = {
  it: {
    "role.description": "Programmatore di videogiochi — Gameplay e UI",

    "menu.projects": "Progetti",
    "menu.skills": "Competenze",
    "menu.contact": "CV & Contatti",

    "projects.title": "Progetti",
    "projects.view": "Vedi progetto",

    "skills.title": "Competenze",

    "technical.skills": "Competenze tecniche",
    "dev-tools": "Strumenti di sviluppo",
    "language.skills": "Lingue",
    "soft.skills": "Competenze trasversali",

    "language.skills.description": "Inglese (avanzato) — Francese (intermedio)",
    "soft-skills.description": "Ascolto attivo — Capacità d'adattamento — Visione d'insieme — Lavoro di gruppo",

    "contact.title": "CV & Contatti",
    "contact.about": "CHI SONO",
    "contact.cv": "Scarica CV",

    "contact.about.description": "Sono un programmatore di videogiochi e mi occupo del gameplay e dell'UI. Pur non essendo specializzato in storytelling e in arti visive, ho una buona comprensione di narrazione, grafica vettoriale, modellazione 3D e rigging, che mi permette di lavorare efficacemente in un team.",

    "footer.location": "In Italia"
  },

  en: {
    "role.description": "Game Programmer — Gameplay and UI",

    "menu.projects": "Projects",
    "menu.skills": "Skills",
    "menu.contact": "CV & Contacts",

    "projects.title": "Projects",
    "projects.view": "View project",

    "skills.title": "Skills",

    "technical.skills": "Technical Skills",
    "dev-tools": "Development Tools",
    "language.skills": "Languages",
    "soft.skills": "Soft skills",

    "language.skills.description": "English (advanced) — Italian (native) — French (intermediate)",
    "soft-skills.description": "Active Listening — Adaptability — Big-Picture View — Teamwork",

    "contact.title": "CV & Contacts",
    "contact.about": "ABOUT",
    "contact.cv": "Download CV",

    "contact.about.description": "I am an Italian video game programmer who focuses on gameplay and UI. Even if I'm not specialized in storytelling or visual arts, I have a good understanding of narrative techniques, vector graphics, 3D modeling, and rigging, which allows me to work effectively in a team.",

    "footer.location": "Based in Italy"
  },

  fr: {
    "role.description": "Programmeur de jeux vidéo — Gampelay et UI",

    "menu.projects": "Projets",
    "menu.skills": "Compétences",
    "menu.contact": "CV & Contacts",

    "projects.title": "Projets",
    "projects.view": "Voir le projet",

    "skills.title": "Compétences",

    "technical.skills": "Compétences techniques",
    "dev-tools": "Outils",
    "language.skills": "Langues",
    "soft.skills": "Compétences transversales",

    "language.skills.description": "Français (intermédiaire) — Italien (natif) — Anglais (avancé)",
    "soft-skills.description": "Écoute active — Capacité d'adaptation — Vision d'ensemble — Travail d'équipe",

    "contact.title": "CV & Contacts",
    "contact.about": "À PROPOS",
    "contact.cv": "Télécharger le CV",

    "contact.about.description": "Je suis un programmeur de jeux vidéo italien et je m'occupe du gameplay et de l'UI. Même si je ne suis pas spécialisé dans le storytelling et les arts visuels, j'ai une bonne maîtrise en narration, graphisme vectoriel, modélisation 3D et rigging, ce qui me permet de bien collaborer en équipe.",

    "footer.location": "Basé en Italie"
  }
};

const languageButtons = document.querySelectorAll(".language-button");

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.lang === language
    );
  });

  localStorage.setItem("language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);