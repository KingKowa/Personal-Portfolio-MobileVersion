const mobileNav = document.querySelector('.mobile-version-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-button');
const menuPort = document.querySelector('.portfolio');
const menuAbt = document.querySelector('.about');
const menuCon = document.querySelector('.contact');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

menuPort.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

menuAbt.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

menuCon.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});