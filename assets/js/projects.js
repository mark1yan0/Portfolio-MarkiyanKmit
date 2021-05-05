'use strict';

let projects = {
  images: {
    image: [
      './assets/media/project-prynce.jpg',
      './assets/media/projects-small.jpg',
      './assets/media/projects-small.jpg',
    ],
    alt: ['Prynce Original Lab', 'img', 'img'],
  },
  links: {
    githubLinks: [
      '',
      'https://github.com/mark1yan0',
      'https://github.com/mark1yan0',
    ],
    projectLinks: ['https://www.prynce.it/', '#', '#'],
    linkTitle: ['www.prynce.it', '#', '#'],
  },
  titles: ['Prynce Original Lab', '# Progetto', '# Progetto'],
  descriptions: {
    p1: [
      'Progetto di e-commerce al quale lavoro da novembre 2020 sfruttando Wordpress, WooCommerce, Elementor, altri plug-in e CSS personalizzato.',
      'Descrizione',
      'Descrizione',
    ],
    p2: [
      'Questo progetto mi ha permesso di capire importanti concetti sulla costruzione di siti web e di allenarmi con snippet di CSS quando ho iniziato a studiarlo.',
      '',
      '',
    ],
    p3: ['Al momento sto lavorando alle ottimizzazioni di tema', '', ''],
  },
};

//creatign  project cards
function createProjects() {
  let projectContainer = document.querySelector('.project-container');
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

    projectContainer.append(projectCard);
  }
}

createProjects();
