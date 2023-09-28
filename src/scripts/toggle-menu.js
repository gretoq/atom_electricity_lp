'use strict';

const menuBtn = document.querySelector('.btn-menu');
const navContainer = document.querySelector('.navigation');

let menuState = false;

menuBtn.addEventListener('click', () => {
  navContainer.classList.toggle('menu-open');
  if (menuState) {
    navContainer.style.display = 'none';
  } else {
    navContainer.style.display = 'flex';
  }

  menuState = !menuState;
});

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  const tabletMaxWidth = 768;

  if (screenWidth > tabletMaxWidth) {
    menuState = false;

    navContainer.style.display = 'flex';

    return;
  }

  navContainer.style.display = 'none';
});
