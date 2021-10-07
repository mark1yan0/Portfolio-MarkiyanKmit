'use strict';
/* Project cards
   ============ */

// projects data
let projects = [
  //prynce
  {
    image: './assets/media/prynce.png',
    alt: 'Prynce Original Lab',
    links: {
      githubLink: '',
      projectLink: 'https://www.prynce.it/',
      linkTitle: 'www.prynce.it',
    },
    title: 'Prynce Original Lab',
    description: {
      p1: 'Progetto di e-commerce al quale lavoro da novembre 2020 sfruttando WordPress, WooCommerce, Elementor, altri plug-in e CSS personalizzato.',
      p2: 'Questo progetto mi ha permesso di capire importanti concetti sulla costruzione di siti web e la sua gestione mi permette continuamente di migliorarmi ed aggiornarmi.',
      p3: '',
    },
  },

  //progetto js advanced
  {
    image: './assets/media/air-quality.png',
    alt: "Progetto Qualità dell'aria",
    links: {
      githubLink: 'https://github.com/mark1yan0/s2i_airQuality',
      projectLink: 'https://nervous-bhabha-b42b4b.netlify.app/',
      linkTitle: 'AirQuality Project',
    },
    title: 'Air Quality',
    description: {
      p1: "Questo progetto mostra l'indice di qualità dell'aria di una zona in base alla geolocalizzazione dell'utente e alla ricerca della città.",
      p2: 'Grazie a questo progetto ho imparato a lavorare con richieste di API, dati in JSON, costruzione di bundle in webpack e in generale scrivere codice JavaScript più avanzato.',
      p3: 'La mappa è stata implementata grazie alla libreria LeafletJS, tutto il resto è stato scritto in vanilla JavaScript.',
    },
  },

  //progetto react
  {
    image: './assets/media/react-books.png',
    alt: 'Progetto libreria',
    links: {
      githubLink: 'https://github.com/mark1yan0/react-project-s2i',
      projectLink: 'https://react-books-321518.web.app/',
      linkTitle: "A Book's Good Project",
    },
    title: "A Book's Good",
    description: {
      p1: 'Questo è un progetto reatizzato con la libreria ReactJs con la Google Books API e tecnologie come React Router, Axios, Context API e altre.',
      p2: "Questo progetto mi ha permesso di addentrarmi dentro uno state managment un po' più complesso del solito, infatti presenta la funzionalità, oltre al poter cercare libri, di aggiungerli ad una lista di preferiti che viene salvata in local storage.",
      p3: '',
    },
  },
];

//creating  project cards
function createProjects() {
  let projectCard = document.querySelectorAll('.project-card'); //Need to insert divs in html
  for (let i = 0; i < projects.length; i++) {
    projectCard[i].innerHTML = `
        <div class="project-image">
            <!-- photo ratio 2:1 -->
            <img
                src="${projects[i].image}"
                alt="${projects[i].alt}"/>
            <div class="project-links">
                <a class="git-icon ${
                  projects[i].links.githubLink === '' ? 'hide' : ''
                }" 
                    href="${projects[i].links.githubLink}" target="_blank">
                    <i class="fab fa-github" title="GitHub"></i>
                </a>
                <a href="${projects[i].links.projectLink}" target="_blank">
                    <i class="fas fa-external-link-alt"
                        title="${projects[i].links.linkTitle}">
                    </i>
                </a>
            </div>
        </div>
        <div class="project-description">
            <h3>${projects[i].title}</h3>
            <hr />
            <p>
                ${projects[i].description.p1}
            </p>
            <p>
                ${projects[i].description.p2}
            </p>
            <p>
                ${projects[i].description.p3}
            </p>
        </div>`;
  }
}

createProjects();
