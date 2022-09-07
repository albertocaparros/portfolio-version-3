const navMenu = document.getElementById('nav-menu');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav_link');

const openNavigationMenu = () => {
  navMenu.classList.remove('close-menu');
  navMenu.classList.add('open-menu');
};

const closeNavigationMenu = () => {
  navMenu.classList.remove('open-menu');
  navMenu.classList.add('close-menu');
};

if (navOpen) {
  navOpen.addEventListener('click', openNavigationMenu);
}

if (navClose) {
  navClose.addEventListener('click', closeNavigationMenu);
}

navLink.forEach((link) => link.addEventListener('click', closeNavigationMenu));

//--------------------------------------------------------------------------------//

const qualificationsUnit = document.getElementsByClassName(
  'qualifications_unit'
);
const qualificationsHeader = document.querySelectorAll(
  '.qualifications_header'
);

function toggleQualifications() {
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

//--------------------------------------------------------------------------------//

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

//--------------------------------------------------------------------------------//

function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

//--------------------------------------------------------------------------------//

const themeButton = document.getElementById('theme-button');
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const darkTheme = 'dark-theme';
const lightIcon = 'uil-sun';

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(lightIcon) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    lightIcon
  );
}

const toggleTheme = () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(lightIcon);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
};

themeButton.addEventListener('click', toggleTheme);

//--------------------------------------------------------------------------------//
