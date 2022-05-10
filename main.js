const mobileNav = document.querySelector('.mobile-version-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-button');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});
