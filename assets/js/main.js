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

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);
