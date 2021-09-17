'use strict';
/* ============
    Project cards
   ============ */

// projects data
let projects = {
  images: {
    image: [
      './assets/media/prynce.png',
      './assets/media/air-quality.png',
      './assets/media/react-books.png',
    ],
    alt: [
      'Prynce Original Lab',
      `Progetto Qualità dell'aria`,
      'Progetto libreria',
    ],
  },
  links: {
    githubLinks: [
      '',
      'https://github.com/mark1yan0/s2i_airQuality',
      'https://github.com/mark1yan0/react-project-s2i',
    ],
    projectLinks: [
      'https://www.prynce.it/',
      'https://nervous-bhabha-b42b4b.netlify.app/',
      'https://react-books-321518.web.app/',
    ],
    linkTitle: ['www.prynce.it', 'AirQuality Project', "A Book's Good Project"],
  },
  titles: ['Prynce Original Lab', 'Air Quality', "A Book's Good"],
  descriptions: {
    p1: [
      'Progetto di e-commerce al quale lavoro da novembre 2020 sfruttando WordPress, WooCommerce, Elementor, altri plug-in e CSS personalizzato',
      "Questo progetto mostra l'indice di qualità dell'aria di una zona in base alla geolocalizzazione dell'utente e alla ricerca della città",
      'Questo è un progetto reatizzato con la libreria ReactJs con la Google Books API e tecnologie come React Router, Axios, Context API e altre.',
    ],
    p2: [
      'Questo progetto mi ha permesso di capire importanti concetti sulla costruzione di siti web e la sua gestione mi permette continuamente di migliorarmi ed aggiornarmi.',
      'Grazie a questo progetto ho imparato a lavorare con richieste di API, dati in JSON, costruzione di bundle in webpack e in generale scrivere codice JavaScript più avanzato',
      "Questo progetto mi ha permesso di addentrarmi dentro uno state managment un po' più complesso del solito, infatti presenta la funzionalità, oltre al poter cercare libri, di aggiungerli ad una lista di preferiti che viene salvata in local storage",
    ],
    p3: [
      '',
      'La mappa è stata implementata grazie alla libreria LeafletJS, tutto il resto è stato scritto in vanilla JavaScript',
      'Maggiori dettagli nel file README su GitHub.',
    ],
  },
};

//creating  project cards
function createProjects() {
  let projectCard = document.querySelectorAll('.project-card'); //Need to insert divs in html
  for (let i = 0; i < projects.titles.length; i++) {
    projectCard[i].innerHTML = `
        <div class="project-image">
            <!-- photo ratio 2:1 -->
            <img
                src="${projects.images.image[i]}"
                alt="${projects.images.alt[i]}"/>
            <div class="project-links">
                <a class="git-icon ${
                  projects.links.githubLinks[i] === '' ? 'hide' : ''
                }" 
                    href="${projects.links.githubLinks[i]}" target="_blank">
                    <i class="fab fa-github" title="GitHub"></i>
                </a>
                <a href="${projects.links.projectLinks[i]}" target="_blank">
                    <i class="fas fa-external-link-alt"
                        title="${projects.links.linkTitle[i]}">
                    </i>
                </a>
            </div>
        </div>
        <div class="project-description">
            <h3>${projects.titles[i]}</h3>
            <hr />
            <p>
                ${projects.descriptions.p1[i]}
            </p>
            <p>
                ${projects.descriptions.p2[i]}
            </p>
            <p>
                ${projects.descriptions.p3[i]}
            </p>
        </div>`;
  }
}

createProjects();
