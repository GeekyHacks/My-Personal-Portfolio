// // Projects section

const projectsarray = [
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project1-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project2-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project3-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project4-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project2-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project4-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
];

const projects = document.querySelector('.projectsContainer');
const projectss = document.createElement('div');
projectss.classList.add('projectContainer');
projects.appendChild(projectss);
projectsarray.forEach((item) => {
    projectss.innerHTML += `
  <div class="project">
    <img class="project_img" src='${item.img}' alt="project1-img" />
    <div class="projectContent">
      <h3 class="project1-content-sec1">
      ${item.Name}
      </h3>
      <ul class="project1-content-sec2">
        <li class="small-li" for="html">${item.technologies[0]}</li>
        <li class="small-li" for="JS">${item.technologies[1]}</li>
        <li class="small-li" for="CSS">${item.technologies[2]}</li>
        <li class="big-li" for="Ruby">${item.technologies[3]}</li>
      </ul>

      <button class="projectBtn" type="button" title="see-project">${item.popupBtn}</button>
    </div>
  </div>

`;
});

const body = document.querySelector('body');
const projectBtn = document.querySelectorAll('.projectBtn');
projectBtn.addEventListener('click', () => {

  const projectPopup = document.querySelector('.popupPage');
  const popupContent = document.createElement('div');
  popupContent.innerHTML = `
  <div class="project">
    <img class="project_img" src='${item.img}' alt="project1-img" />
    <div class="projectContent">
      <h3 class="project1-content-sec1">
      ${item.Name}
      </h3>
      <ul class="project1-content-sec2">
        <li class="small-li" for="html">${item.technologies[0]}</li>
        <li class="small-li" for="JS">${item.technologies[1]}</li>
        <li class="small-li" for="CSS">${item.technologies[2]}</li>
        <li class="big-li" for="Ruby">${item.technologies[3]}</li>
      </ul>

      <button class="projectBtn" type="button" title="see-project">${item.popupBtn}</button>
    </div>
  </div>

`;
projectPopup.classList.toggle('showPage')
projectPopup.style.animation = 'fadeOut 4s';
projectPopup.appendChild(popupContent);
body.appendChild(projectPopup);
});


//   workStart.className ="start";
//   workStart.innerHTML="<h2 class="myworkHeader">My Recent Works<span>.</span></h2>
//   "
