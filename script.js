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
    "modal.open": "Apri su itch.io",

    "skills.title": "Competenze",

    "technical.skills": "Competenze tecniche",
    "dev-tools": "Strumenti di sviluppo",
    "language.skills": "Lingue",
    "soft.skills": "Competenze trasversali",

    "language.skills.description": "Inglese (avanzato) — Francese (intermedio)",
    "soft-skills.description": "Ascolto attivo — Capacità d'adattamento — Visione d'insieme — Lavoro di gruppo",

    "projects.can-you-trust-me.description": "Abbina le tue emotes a quelle degli abitanti del villaggio per aumentare la loro fiducia, ma fai attenzione: se commetti un errore, la loro fiducia potrebbe diminuire.",
    "projects.platform-panic.description": "Assicurati che su ogni treno salgano abbastanza passeggeri prima della partenza. Se un treno parte con troppo pochi passeggeri, perderai profitti.",
    "projects.a-way-out.description": "Supera ogni livello sbloccando le porte, interagendo con gli oggetti presenti nell'ambiente o evitando i nemici. Trova la via d'uscita prima che la tua torcia si spenga.",

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
    "modal.open": "Open on itch.io",

    "skills.title": "Skills",

    "technical.skills": "Technical Skills",
    "dev-tools": "Development Tools",
    "language.skills": "Languages",
    "soft.skills": "Soft skills",

    "language.skills.description": "English (advanced) — Italian (native) — French (intermediate)",
    "soft-skills.description": "Active Listening — Adaptability — Big-Picture View — Teamwork",

    "projects.can-you-trust-me.description": "Match your emotes with those of the villagers to boost their trust, but be careful: if you make a mistake, their trust might drop.",
    "projects.platform-panic.description": "Make sure enough passengers board each train before it departs. If a train leaves with too few passengers, you'll lose profit.",
    "projects.a-way-out.description": "Get through each level by unlocking doors, interacting with objects in the environment, or avoiding enemies. Find your way out before your flashlight runs out of battery.",

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
    "modal.open": "Ouvrir sur itch.io",

    "skills.title": "Compétences",

    "technical.skills": "Compétences techniques",
    "dev-tools": "Outils",
    "language.skills": "Langues",
    "soft.skills": "Compétences transversales",

    "language.skills.description": "Français (intermédiaire) — Italien (natif) — Anglais (avancé)",
    "soft-skills.description": "Écoute active — Capacité d'adaptation — Vision d'ensemble — Travail d'équipe",

    "projects.can-you-trust-me.description": "Faites correspondre vos émoticônes à celles des villageois pour gagner leur confiance, mais attention : si vous faites des erreurs, leur confiance risque de diminuer.",
    "projects.platform-panic.description": "Assurez-vous qu'un nombre suffisant de passagers monte à bord de chaque train avant son départ. Si un train part avec trop peu de passagers, vous perdrez de l'argent.",
    "projects.a-way-out.description": "Passez chaque niveau en ouvertant des portes, en interagissant avec les objets présents dans l'environnement ou en évitant les ennemis. Trouve la sortie avant que ta lampe de poche ne tombe en panne.",

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

/* PROJECT MODAL */

const projects = {
  "can-you-trust-me": {
    title: "Can You Trust Me?",
    type: "Brackeys Game Jam / 2026",
    cover: "canyoutrustme_cover.gif",
    video: "7IznN2eINkw",
    url: "https://hinarii.itch.io/canyoutrustme/"   // metti qui il link vero del gioco
  },
  "platform-panic": {
    title: "Platform Panic",
    type: "GMTK Game Jam / 2026",
    cover: "platformpanic_cover.gif",
    video: "C_1nOPyj-Xw",
    url: "https://hinarii.itch.io/platform-panic"
  },
  "a-way-out": {
    title: "A Way Out",
    type: "Collab Jam / 2026",
    cover: "awayout_cover.gif",
    video: "LQfi-FK_y3g",
    url: "https://melancholymaou.itch.io/a-way-out-jam-game"
  }
};

const modal = document.getElementById("project-modal");

function openProject(id) {
  const project = projects[id];
  if (!project) return;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-type").textContent = project.type;
  document.getElementById("modal-link").href = project.url;

  // video (o gif di ripiego)
  const videoBox = document.getElementById("modal-video");
  videoBox.innerHTML = "";

  if (project.video) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${project.video}?rel=0`;
    iframe.title = project.title;
    iframe.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    videoBox.appendChild(iframe);
  } else if (project.cover) {
    const img = document.createElement("img");
    img.src = project.cover;
    img.alt = project.title;
    videoBox.appendChild(img);
  }

  document.getElementById("modal-description").dataset.i18n = `projects.${id}.description`;
  setLanguage(document.documentElement.lang);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.getElementById("modal-video").innerHTML = ""; // ferma il video
}

document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openProject(link.dataset.project);
  });
});

modal.querySelectorAll("[data-close]").forEach((element) => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeProject();
  }
});