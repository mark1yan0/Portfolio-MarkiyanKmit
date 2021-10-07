'use strict';
/*  Nav menu
   ============ */

let nav = document.getElementById('nav');
let navBtnOpen = document.querySelector('.open');
let navBtnClose = document.querySelector('.close');
let navItem = document.querySelector('.nav-list li');
let navOpen = false;

navBtnOpen.addEventListener('click', () => nav.classList.add('nav__active'));
navBtnClose.addEventListener('click', () =>
  nav.classList.remove('nav__active')
);
navItem.addEventListener('click', () => nav.classList.remove('nav__active'));
