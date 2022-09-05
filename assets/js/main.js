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

const qualificationsUnit = document.getElementsByClassName(
  'qualifications_unit'
);
const qualificationsHeader = document.querySelectorAll(
  '.qualifications_header'
);

function toggleQualifications() {
  console.log('hola');
  let itemClass = this.parentNode.className;

  for (i = 0; i < qualificationsUnit.length; i++) {
    qualificationsUnit[i].className =
      'qualifications_unit qualifications_content-close';
  }

  if (itemClass === 'qualifications_unit qualifications_content-close') {
    this.parentNode.className =
      'qualifications_unit qualifications_content-open';
  }
}

qualificationsHeader.forEach((element) => {
  element.addEventListener('click', toggleQualifications);
});
