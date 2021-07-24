'use strict';
/* ============
    Nav menu
   ============ */
// //variables
// let nav = document.getElementById('nav');

// //functions
// function openNav() {
//   nav.style.cssText = `@media only screen and (max-width: 992px) {
//     width: 50px;
//     height: 50px;
//     overflow: hidden;
//     margin: 10px;
//     border
//     border-radius: 50%;
//   }`;
// }

// openNav();

// //aventListeners

// /* ============
//     Tools popup
//    ============ */
// //variables
// let tools = document.querySelectorAll('.tool');
// let expPopup = document.getElementById('exp');
// let closePopup = document.querySelector('.btn-close');
// let overlay = document.createElement('div');

// //functions
// function showPopup() {
//   expPopup.style.width = `40%`;

//   overlay.style.cssText = `position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0,0,0,0.5);
//   z-index: 2;
//   cursor: pointer;`;
//   document.body.prepend(overlay);
// }

// function hidePopup() {
//   expPopup.style.width = `0`;
//   document.body.style.backgroundColor = '';
//   overlay.style.cssText = '';
//   overlay.remove;
// }

// //eventListeners
// for (let i = 0; i < tools.length; i++) {
//   tools[i].addEventListener('click', showPopup);
// }

// closePopup.addEventListener('click', hidePopup);
// overlay.addEventListener('click', hidePopup);
