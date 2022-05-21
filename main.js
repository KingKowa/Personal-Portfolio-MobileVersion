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
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images-desk/Snapshoot-Portfolio-1.svg',
    technologies: ['html', 'css', 'javascript'],
    liveversion: '',
    source: '',
    category: ['CANOPY', 'Back End', '2015'],
  },
  {
    name: 'Multi-post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: './images-desk/Snapshoot-Portfolio-2.svg',
    technologies: ['html', 'css', 'javascript'],
    liveversion: '',
    source: '',
    category: ['CANOPY', 'Back End', '2015'],
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImage: './images-desk/Snapshoot-Portfolio-3.svg',
    technologies: ['html', 'css', 'Bootstrap'],
    liveversion: '',
    source: '',
    category: ['CANOPY', 'Back End', '2015'],
  },
  {
    name: 'Multi-post Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    featuredImage: './images-desk/Snapshoot-Portfolio-4.svg',
    technologies: ['html', 'css', 'React'],
    liveversion: '',
    source: '',
    category: ['CANOPY', 'Back End', '2015'],
  },
];

const workSection = document.querySelector('#works-section');

for (let i = 0; i < 4; i += 1) {
  const subsection = document.createElement('section');
  subsection.className = 'subsection-one';
  subsection.innerHTML = `
  <div class="second-section-mobile-img">
  <img src="${projectSection[i].featuredImage}" alt="Featured Image" class="responsive">
  </div>
  <div class="desktop-img">
      <img src="${projectSection[i].featuredImage}" alt="" class="responsive">
  </div>`;
  const firstSection = document.createElement('div');
  firstSection.innerHTML = `
  <div>
  <h3>
      ${projectSection[i].name}
  </h3>
  </div>`;

  const ulList = document.createElement('ul');
  ulList.classList.add('list-items');

  projectSection[i].category.forEach((elem, index) => {
    const cat = document.createElement('li');
    cat.className = `item-${index}`;
    cat.textContent = elem;
    ulList.appendChild(cat);
  });
  firstSection.appendChild(ulList);
  firstSection.innerHTML += `<div class="paragraph">
    <p>
        ${projectSection[i].description}
    </p>
  </div>
`;
  firstSection.classList.add('first-section-info');
  subsection.append(firstSection);
  const listItems = document.createElement('ul');
  listItems.classList.add('btn-changes');

  projectSection[i].technologies.forEach((elem) => {
    const list = document.createElement('li');
    listItems.appendChild(list);
    const buttons = document.createElement('button');
    list.appendChild(buttons);
    buttons.textContent = elem;
  });
  firstSection.appendChild(listItems);
  firstSection.innerHTML += `<div class="big-btn">
  <button type="button" class="btn-4">See Project</button>
</div>`;
  workSection.appendChild(subsection);
}

const seeMore = document.querySelectorAll('.btn-4');
seeMore.forEach((element, index) => {
  element.addEventListener('click', () => {
    const popUpWin = document.createElement('div');
    popUpWin.classList.add('details-modal');
    const mainPopUpWin = document.createElement('div');
    mainPopUpWin.classList.add('sub-modal');
    popUpWin.appendChild(mainPopUpWin);
    document.body.appendChild(popUpWin);
    mainPopUpWin.innerHTML += `
    <button class="close-pop">
        <i class="fa-solid fa-xmark"></i>
    </button>
<div>
    <h3 class="pop-heading">
    ${projectSection[index].name}
    </h3>
</div>
`;
    const ulList = document.createElement('ul');
    ulList.classList.add('list-items');

    projectSection[index].category.forEach((elem, i) => {
      const cat = document.createElement('li');
      cat.className = `item-${i}`;
      cat.textContent = elem;
      ulList.appendChild(cat);
    });

    const popupBottom = document.createElement('div');
    popupBottom.classList.add('popup-bottom');
    mainPopUpWin.appendChild(ulList);
    mainPopUpWin.innerHTML += `
            <div class="pop-img">
                <img src="${projectSection[index].featuredImage}" alt="" class="responsive">
            </div>`;
    popupBottom.innerHTML = `
            <div class="modal-para">
            <p class="pop-message">
                ${projectSection[index].description}
            </p>
            </div>
`;

    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');
    const techList = document.createElement('ul');
    techList.classList.add('pop-tech');

    projectSection[index].technologies.forEach((elem, index) => {
      const list = document.createElement('li');
      techList.appendChild(list);
      const buttons = document.createElement('button');
      buttons.classList.add(`btn-${index + 1}`);
      list.appendChild(buttons);
      buttons.textContent = elem;
    });
    rightSide.appendChild(techList);
    popupBottom.appendChild(rightSide);
    mainPopUpWin.appendChild(popupBottom);
    rightSide.innerHTML += `
<div>
    <ul class="pop-button">
         <li><button type="button" class="pop-btn">See live <img src="images/Icon1.svg" alt=""></button></li>
          <li><button type="button" class="pop-btn">See Source <img src="images/Vector2.svg" alt=""></button></li>
    </ul>
</div>
`;

    window.scrollTo(0, 0);

    const mainContent = document.querySelector('#main-content');
    mainContent.classList.add('blur');

    const popupClose = document.querySelector('.close-pop');
    popupClose.addEventListener('click', () => {
      document.querySelector('.details-modal').classList.add('hidden');
      document.querySelector('.details-modal').remove();
      mainContent.classList.remove('blur');
    });
  });
});

const userEmail = document.querySelector('.email-field');
const formContainer = document.querySelector('#desk-contact');
const form = document.querySelector('#sub-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userEmail.value == (userEmail.value).toLowerCase()) {
    const disError = document.createElement('span');
    disError.className = 'errorMsg';
    disError.innerHTML = 'Your email must be in lowercase letters';
    formContainer.appendChild(span);
  } else {
    form.submit();
  }
});
