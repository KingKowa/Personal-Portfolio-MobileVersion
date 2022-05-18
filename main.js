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

const projectSection = [
  {
    name: 'Multipost Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi ullam ea unde laudantium odit eos expedita quo, optio tempora.',
    featuredImage: './images/Snapshoot-Portfolio-3.png',
    technologies: ['html', 'css','javascript'],
    liveversion:'',
    source:'',
  },
  {
    name: 'Multipost Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi ullam ea unde laudantium odit eos expedita quo, optio tempora.',
    featuredImage: './images/Snapshoot-Portfolio-3.png',
    technologies: ['html', 'css','javascript'],
    liveversion:'',
    source:'',
  },
  {
    name: 'Multipost Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi ullam ea unde laudantium odit eos expedita quo, optio tempora.',
    featuredImage: './images/Snapshoot-Portfolio-4.png',
    technologies: ['html', 'css','Bootstrap'],
    liveversion:'',
    source:'',
  },
  {
    name: 'Multipost Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi ullam ea unde laudantium odit eos expedita quo, optio tempora.',
    featuredImage: './images/Snapshoot-Portfolio-5.png',
    technologies: ['html', 'css','React'],
    liveversion:'',
    source:'',
  },  
];

const workSection = document.querySelector('#works-section');

for (let i=0; i < 4; i += 1 ){
  const subsection = document.createElement('section');
  subsection.className = "subsection-one"
  subsection.innerHTML= `
  <h3>${projectSection[i].name}</h3>
  <div class="second-section-mobile-img">
  <img src="${projectSection[i].featuredImage}" alt="Featured Image">
  </div>`

  workSection.appendChild(subsection);
}