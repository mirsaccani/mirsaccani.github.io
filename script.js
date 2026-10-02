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
    "intro.description": "Una breve frase che descrive chi sei e cosa fai.",

    "menu.projects": "Progetti",
    "menu.skills": "Competenze",
    "menu.contact": "CV & Contatti",

    "projects.title": "Progetti",
    "projects.view": "Vedi progetto",

    "skills.title": "Competenze",

    "contact.title": "CV & Contatti",
    "contact.about": "CHI SONO",
    "contact.cv": "Scarica CV",

    "footer.location": "Vivo in Italia"
  },

  en: {
    "role.description": "Game Programmer — Gameplay and UI",
    "intro.description": "Bla bla",

    "menu.projects": "Projects",
    "menu.skills": "Skills",
    "menu.contact": "CV & Contacts",

    "projects.title": "Projects",
    "projects.view": "View project",

    "skills.title": "Skills",

    "contact.title": "CV & Contacts",
    "contact.about": "ABOUT",
    "contact.cv": "Download CV",

    "footer.location": "Based in Italy"
  },

  fr: {
    "role.description": "Programmeur de jeux vidéo — Gampelay et UI",
    "intro.description": "Blah blah",

    "menu.projects": "Projets",
    "menu.skills": "Compétences",
    "menu.contact": "CV & Contacts",

    "projects.title": "Projets",
    "projects.view": "Voir le projet",

    "skills.title": "Compétences",

    "contact.title": "CV & Contacts",
    "contact.about": "À PROPOS",
    "contact.cv": "Télécharger le CV",

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