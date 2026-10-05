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

    "info.role": "Ruolo",
    "info.team": "Team",
    "info.duration": "Durata",
    "info.tools": "Strumenti & Motore di gioco",
    "info.programminglang": "Linguaggi di programmazione",
    "info.tasks": "Mansioni",
    "info.workflow": "Flusso di lavoro",

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

    "info.role": "Role",
    "info.team": "Team",
    "info.duration": "Duration",
    "info.tools": "Tools & Game engine",
    "info.programminglang": "Programming languages",
    "info.tasks": "Tasks",
    "info.workflow": "Workflow",

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

    "info.role": "Rôle",
    "info.team": "Équipe",
    "info.duration": "Durée",
    "info.tools": "Outils & Moteur de jeu",
    "info.programminglang": "Langages de programmation",
    "info.tasks": "Tâches",
    "info.workflow": "Flux de travail",

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
    url: "https://hinarii.itch.io/canyoutrustme/",
    role: {
      it: "Programmatore di gameplay e UI.",
      en: "Gameplay and UI programmer.",
      fr: "Programmeur gameplay et UI."
    },
    team: {
      it: "Programmatore [1].",
      en: "Programmer [1].",
      fr: "Programmeur [1]."
    },
    duration: {
      it: "Un mese: una settimana per la game jam e due settimane per rifinire e aggiungere funzionalità.",
      en: "One month: one week for the game jam and two weeks to polish and add features.",
      fr: "Un mois : une semaine pour le game jam et deux semaines pour améliorer et ajouter des fonctionnalités."
    },
    tools: "Unity2D 6.5, GitHub.",
    programminglang: "C#.",
    tasks: {
      it: "Menu principale, menu di pausa, impostazioni, selezione casuale delle emote e sistema di abbinamento delle emote con punti fiducia, rifiniture e correzioni di bug.",
      en: "Main menu, pause menu, settings, emotes randomizer and emote’s matching system with trust points, polish and debugs.",
      fr: "Menu principal, menu de pause, paramètres, choix automatique des émoticônes et système pour associer des émoticônes avec des points de confiance, améliorations et corrections de bugs."
    },
    workflow: {
      it: "Durante la game jam, ho creato le meccaniche di base con il sistema di match delle emote, il movimento casuale degli NPC (assistito dall’IA) e le impostazioni essenziali; dopodiché mi sono preso una settimana di pausa. Successivamente ho aggiunto gli effetti sonori, migliorato il sistema di abbinamento, aggiunto le modalità di difficoltà e perfezionato il gioco sulla base dei feedback ricevuti.",
      en: "During the game jam, I create the core mechanics with the emote’s matching system, random NPC walk (AI assisted) and essential settings, after that I took a week of break. Then I added the sound effects, improved the matching system, added difficulty modes and polished the game based on the feedback I received.",
      fr: "Pendant le game jam, j’ai développé les mécanismes de base du jeu. J’ai créé le système pour associer les emotes et j’ai travaillé sur la marche automatique des NPC avec l’aide de l’IA. J’ai aussi ajouté les paramètres principaux du jeu. Ensuite, j’ai fait une pause d’une semaine. Après cette pause, j’ai ajouté les effets sonores et amélioré le système d’association des emotes. J’ai aussi créé plusieurs niveaux de difficulté. Enfin, j’ai amélioré le jeu grâce aux commentaires des joueurs.",
    }
  },
  "platform-panic": {
    title: "Platform Panic",
    type: "GMTK Game Jam / 2026",
    cover: "platformpanic_cover.gif",
    video: "C_1nOPyj-Xw",
    url: "https://hinarii.itch.io/platform-panic",
    role: {
      it: "Programmatore di gameplay e UI.",
      en: "Gameplay and UI programmer.",
      fr: "Programmeur gameplay et UI."
    },
    team: {
      it: "Artista 3D [1], programmatori [3].",
      en: "3D Artist [1], programmers [3].",
      fr: "Artiste 3D [1], programmeurs [3]."
    },
    duration: {
      it: "Un mese: una settimana per la game jam e due settimane per migliorare e aggiungere funzionalità.",
      en: "One month: one week for the game jam and two weeks to polish and add features.",
      fr: "Un mois : une semaine pour le game jam et deux semaines pour améliorer et ajouter des fonctionnalités."
    },
    tools: "Unity3D 6.3 LTS, GitHub, Google Docs.",
    programminglang: "C#.",
    tasks: {
      it: "Passaggio tra animazioni e movimenti in generale (treni e NPC); gestione del tempo (orari dei treni e scorrere delle ore/minuti); transizione tra scene (menu principale, impostazioni e scena di gioco); aggiunta del menu di pausa e della schermata \"Game Over\"; debug e rifinitura.",
      en: "Switching between animations and general movements (trains and NPCs); time management (train schedules and passage of hours/minutes); scene transitions (main menu, settings, and game scenes); adding the pause menu and the \"Game Over\" screen; debugging and polishing.",
      fr: "Transitions entre les animations et les mouvements en général (trains et NPC); gestion du temps (horaires des trains et passage des heures/minutes); transitions entre les scènes (menu principal, paramètres et scène de jeu); ajouter le menu de pause et l'écran « Game Over »; corriger les bugs et améliorer le jeu."
    },
    workflow: {
      it: "A differenza dei precedenti lavori di gruppo (A Way Out), questa volta avevamo deciso di stabilire ruoli e compiti specifici. Per prima cosa, ho creato una lista delle cose da fare con tutto ciò che era necessario per il gioco. Poi, ogni giorno comunicavamo i nostri progressi e i cambiamenti nei task che stavamo svolgendo sul nostro server Discord: in questo modo, potevamo stabilire le nostre priorità di volta in volta. Dopo la pubblicazione del gioco, mi sono occupato di correggere i bug rimanenti, rifinire l'esperienza di gioco complessiva e migliorare l'aspetto visivo sulla base del feedback che abbiamo ricevuto durante la sessione di votazione della game jam.",
      en: "Unlike our previous group projects (A Way Out), this time we decided to assign specific roles and tasks. Firstly, I created a to do list with all of the necessary things about the game we decided to do. Then, every day, we shared our progress and any changes to the tasks we were working on via our Discord server: this allowed us to set our priorities on a case-by-case basis. After the game’s release, I focused on fixing the remaining bugs, polishing the gameplay experience, and improving the visuals based on the feedback we received during the game jam’s voting session.",
      fr: "Contrairement à précédents travaux collectifs (A Way Out), à cette occasion, nous avions décidé de définir des rôles et des tâches spécifiques. Tout d’abord, j’ai créé une liste de tâches comprenant toutes les actions nécessaires pour le jeu. Chaque jour, nous partagions nos progrès et les changements dans les tâches que nous avions en cours sur notre serveur Discord : grâce à ce système, nous pouvions définir nos priorités à chaque étape. Après la sortie du jeu, je me suis occupé de corriger les bugs restants, d’améliorer l’expérience de jeu et d’améliorer l’aspect visuel grâce aux commentaires que nous avons reçus.",
    }
  },
  "a-way-out": {
    title: "A Way Out",
    type: "Collab Jam / 2026",
    cover: "awayout_cover.gif",
    video: "LQfi-FK_y3g",
    url: "https://melancholymaou.itch.io/a-way-out-jam-game",
    role: {
      it: "Programmatore di gameplay.",
      en: "Gameplay programmer.",
      fr: "Programmeur gameplay."
    },
    team: {
      it: "Level designer [1], programmatori [2, ma inizialmente 3].",
      en: "Level designer [1], programmers [2, but initially 3].",
      fr: "Level designer [1], programmeurs [2, mais 3 au départ]."
    },
    duration: {
      it: "Tre settimane: due settimane per la game jam e una settimana per rifinire il gioco.",
      en: "Three weeks: two weeks for the game jam and one week to polish.",
      fr: "Trois semaines : deux semaines pour le game jam et une semaine pour peaufiner le jeu."
    },
    tools: "Unity3D 6.4, GitHub.",
    programminglang: "C#.",
    tasks: {
      it: "Transizione tra scene (menu principale, schermata di caricamento,tutorial e livelli), stazioni di ricarica, sistema di batteria (collegato al game over) e perfezionamenti (miglioramento delle collisioni tra la torcia e l’ambiente e regolazione della posizione della telecamera del giocatore).",
      en: "Scene transitions (between the main menu, loading scene, tutorial, and levels), charging stations, battery system (linked to game over), and refinements (improved collision between the flashlight and the environment, and adjusted the player's camera position).",
      fr: "Transitions entre les scènes (menu principal, écran de chargement, tutoriel et niveaux), stations de recharge, système de batterie (lien avec le game over) et améliorations (correction de la collision entre la torche et l’environnement et modification de la position de la caméra du joueur)."
    },
    workflow: {
      it: "Dopo una breve sessione di brainstorming, abbiamo iniziato a creare più livelli possibili, in modo da poi scegliere i migliori. Il nostro approccio era che tutti potessero occuparsi di tutto, ma non si è rivelato ideale perché ha portato a malintesi e confusione. \nA metà della game jam, uno dei nostri programmatori ha lasciato il gruppo, quindi abbiamo deciso di cambiare strategia perché eravamo un po’ in ritardo rispetto al piano previsto. Abbiamo smesso di creare nuovi livelli e abbiamo migliorato quelli che erano quasi finiti, tralasciando il resto. \nIn questo modo, abbiamo avuto il tempo di finire il gioco e anche di testarlo un po’ prima di pubblicarlo su itch.io. Dopodiché, abbiamo letto tutti i commenti e risolto i problemi principali sulla base dei vari feedback ricevuti.",
      en: "After a short session of brainstorming, we started to create as many levels as possible in order to choose the best ones. Our approach was that everyone could potentially do everything, but this wasn’t an ideal approach because this led to misunderstanding and confusion. \nIn the middle of the game jam, one of our programmers left the group, and so we decided to change our approach because we were a bit late in our desired plan. We stopped creating new levels and improved what was almost finished and left the rest out. \nThis way, we had the time to finish the game and also playtest a bit before publishing the game on itch.io. After that, we read all the comments and improved the main issues based on the various feedback.",
      fr: "Après une courte séance de brainstorming, nous avons commencé à créer le plus de niveaux possible. L'objectif était de sélectionner les meilleurs. Au début, chacun pouvait travailler sur toutes les parties du jeu. Mais cette méthode n'était pas idéale, parce qu'elle a causé des conflits et de la confusion. \nAu moitié du game jam, un de nos programmeurs a quitté le groupe. On a alors décidé de changer notre méthode de travail, parce qu'on avait un peu de retard sur le planning. On a arrêté de créer de nouveaux niveaux et on a amélioré ceux qui étaient presque terminés. Pour les autres, on les a pas utilisés. \nGrâce à cette méthode, nous avons eu le temps de terminer le jeu et de le tester un peu avant de le publier sur itch.io. Ensuite, nous avons lu tous les commentaires et corrigé les principaux problèmes grâce aux retours des joueurs.",
    }
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

  

    // tabella informazioni
  const lang = document.documentElement.lang;

  modal.querySelectorAll(".info-row").forEach((row) => {
    const value = project[row.dataset.info];

    row.hidden = !value || (typeof value === "object" && !value[lang]);
    if (row.hidden) return;

    row.querySelector("p").textContent =
      typeof value === "string" ? value : value[lang];
  });

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