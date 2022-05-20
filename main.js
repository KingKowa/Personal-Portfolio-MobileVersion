const mobileNav = document.querySelector('.mobile-version-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-button');
const menuPort = document.querySelector('.portfolio');
const menuAbt = document.querySelector('.about');
const menuCon = document.querySelector('.contact');
const background = document.querySelector('.headline-section');
const backgroundNav = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.add('active');
  background.classList.add('blur');
  backgroundNav.classList.add('blur');
});

closeButton.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  background.classList.remove('blur');
  backgroundNav.classList.remove('blur');
});

menuPort.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  background.classList.remove('blur');
  backgroundNav.classList.remove('blur');
});

menuAbt.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  background.classList.remove('blur');
  backgroundNav.classList.remove('blur');
});

menuCon.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  background.classList.remove('blur');
  backgroundNav.classList.remove('blur');
});


const userEmail = document.querySelector('.email-field');
const form = document.querySelector('#desk-contact');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userEmail.value !== (userEmail.value).toLowerCase()) {
    const pTag = document.createElement('p');
    pTag.className = 'errorMsg';
    pTag.innerHTML = 'Your email must be lowercase';
    form.appendChild(span);
  } else {
    form.submit();
  }
});