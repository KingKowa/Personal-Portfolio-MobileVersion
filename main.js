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

{
  
  name: "project 3",
  description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut perferendis nobis voluptatem ex vel? Amet!",
  Image : "images/Snapshoot-Portfolio-3.png",
}
]

ProjectData.forEach((project, index )=> {
  document.querySelector('#main-grid').innerHTML += `
  
  <section class="subsection-three">
  <img id="third-section-mobile-img" src="images/Snapshoot-Portfolio-3.png" alt="">
  <img id="third-section-desktop-img" src="images-desk/Snapshoot-Portfolio-3.svg" alt="">
  <div>
  <div class="third-section-info">
   <h3>
       ${project.name}
   </h3>
</div>
<div class="list-items">
   <h4>CANOPY</h4>
   <ul class="ul-list">
       <li>Back End Dev</li>
   </ul>
   <ul class="ul-list">
       <li>2015</li>
   </ul>
</div>
<div class="paragraph">
   <h4>
   ${project.description}
   </h4>
</div>
<div>
  <ul class="btn-changes">
      <li><button type="button" class="btn-1">html</button></li>
      <li><button type="button" class="btn-2">css</button></li>
      <li><button type="button" class="btn-3">javaScript</button></li>
  </ul>
</div>
<div class="big-btn">
   <button type="button" class="btn-4" data-index="${index}">See Project</button>
</div>
</div>
</section>
  
  `
  
});
