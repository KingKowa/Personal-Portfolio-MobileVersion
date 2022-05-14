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

const ProjectData =[

  {
  
    name: "project 1",
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut perferendis nobis voluptatem ex vel? Amet!",
    Image : "images/Snapshoot-Portfolio-3.png",
  },
  
  {
  
    name: "project 2",
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut perferendis nobis voluptatem ex vel? Amet!",
    Image : "images/Snapshoot-Portfolio-3.png",
  },
  