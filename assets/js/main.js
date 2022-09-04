const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

const showMenu = () => {
  navMenu.classList.remove('close-menu');
  navMenu.classList.add('show-menu');
};

const closeMenu = () => {
  navMenu.classList.remove('show-menu');
  navMenu.classList.add('close-menu');
};

if (navToggle) {
  navToggle.addEventListener('click', showMenu);
}

if (navClose) {
  navClose.addEventListener('click', closeMenu);
}

const navLink = document.querySelectorAll('.nav_link');

navLink.forEach((link) => link.addEventListener('click', closeMenu));
