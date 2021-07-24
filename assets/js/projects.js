'use strict';
/* ============
    Project cards
   ============ */

// projects data
let projects = {
  images: {
    image: [
      './assets/media/project-prynce.png',
      './assets/media/air-quality.png',
      './assets/media/projects-small.jpg',
    ],
    alt: ['Prynce Original Lab', 'img', 'img'],
  },
  links: {
    githubLinks: [
      '',
      'https://github.com/mark1yan0/s2i_airQuality',
      'https://github.com/mark1yan0',
    ],
    projectLinks: [
      'https://www.prynce.it/',
      'https://nervous-bhabha-b42b4b.netlify.app/',
      '#',
    ],
    linkTitle: ['www.prynce.it', '#', '#'],
  },
  titles: ['Prynce Original Lab', 'Air Quality', '# Progetto'],
  descriptions: {
    p1: [
      'Progetto di e-commerce al quale lavoro da novembre 2020 sfruttando WordPress, WooCommerce, Elementor, altri plug-in e CSS personalizzato',
      "Questo progetto mostra l'indice di qualità dell'aria di una zona in base alla geolocalizzazione dell'utente e alla ricerca della città",
      'Descrizione',
    ],
    p2: [
      'Questo progetto mi ha permesso di capire importanti concetti sulla costruzione di siti web e la sua gestione mi permette continuamente di migliorarmi ed aggiornarmi.',
      'Grazie a questo progetto ho imparato a lavorare con richieste di API, dati in JSON, costruzione di bundle in webpack e in generale scrivere codice JavaScript più avanzato',
      '',
    ],
    p3: [
      '',
      'La mappa è stata implementata grazie alla libreria LeafletJS, tutto il resto è stato scritto in vanilla JAvaScript',
      '',
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
