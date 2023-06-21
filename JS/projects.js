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

for (let i = 0; i < projectsarray.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('projectContainer');

  card.innerHTML = `
  <div class="project">
  <img class="project_img" src='${projectsarray[i].img}' alt="project1-img" />
  <div class="projectContent">
    <h3 class="project1-content-sec1">
    ${projectsarray[i].Name}
    </h3>
    <ul class="project1-content-sec2">
      <li class="small-li" for="html">${projectsarray[i].technologies[0]}</li>
      <li class="small-li" for="JS">${projectsarray[i].technologies[1]}</li>
      <li class="small-li" for="CSS">${projectsarray[i].technologies[2]}</li>
      <li class="big-li" for="Ruby">${projectsarray[i].technologies[3]}</li>
    </ul>

    <button class="projectBtn" type="button" title="see-project">${projectsarray[i].popupBtn}</button>
  </div>
</div>

`;
projects.appendChild(card);
}

const projectPopup = document.querySelector('.popupPage');
const projectBtn = document.querySelectorAll('.projectBtn');

projectBtn.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    projectPopup.style.display = 'block';
    const cardIndex = btnIndex;
    projectPopup.innerHTML = `
      <div class="popup">
        <h2 class="pop-title">${projectsarray[cardIndex].Name}</h2>
        <ul class="pop-field">
          <li class="cano">CANOPY</li>
          <li class="tag">&#8226; Back End Dev</li>
          <li class="tag">&#8226; 2015</li>
        </ul>
        <div class="pop-img-container">
          <img class="pop-img" src="${projectsarray[cardIndex].img}" alt="">
        </div>
        <div class="pop-para">
          <p>${projectsarray[cardIndex].description[0]}</p>
        </div>
        <div class="pop-skills">
          <ul class="pop-training">
            <li class="other-skills">HTML</li>
            <li class="other-skills">CSS</li>
            <li class="other-skills">JavaScript</li>
            <li class="other-skills">Ruby</li>
            <li class="other-skills">Bootstrap</li>
          </ul>
        </div>
        <div class="pop-links">
          <a href="${projectsarray[cardIndex].liveVersion}">
            <button class="pop-link1 pop-card-btn" type="submit">
              See live
              <img class="search" src="pop-images/live.png" alt="">
            </button>
          </a>
          <a href="${projectsarray[cardIndex].sourecLink}">
            <button class="pop-link2 pop-card-btn" type="submit">
              See source
              <img class="search" src="pop-images/popup.png" alt="">
            </button>
          </a>
        </div>
        <p id="close-btn">&times;</p>
      </div>
    `;

    const closebtn = document.querySelector('#close-btn');
    closebtn.addEventListener('click', () => {
      projectPopup.style.display = 'none';
    });
  });
});





// function createProjects() {
//   const projects = document.querySelector('.projectsContainer');
//   const projectss = document.createElement('div');
//   projectss.classList.add('projectContainer');
//   projects.appendChild(projectss);
//   projectsarray.forEach((item) => {
//     projectss.innerHTML += `
//   <div class="project">
//     <img class="project_img" src='${item.img}' alt="project1-img" />
//     <div class="projectContent">
//       <h3 class="project1-content-sec1">
//       ${item.Name}
//       </h3>
//       <ul class="project1-content-sec2">
//         <li class="small-li" for="html">${item.technologies[0]}</li>
//         <li class="small-li" for="JS">${item.technologies[1]}</li>
//         <li class="small-li" for="CSS">${item.technologies[2]}</li>
//         <li class="big-li" for="Ruby">${item.technologies[3]}</li>
//       </ul>

//       <button class="projectBtn" type="button" title="see-project">${item.popupBtn}</button>
//     </div>
//   </div>

// `;
//   });
// }

// createProjects();

// function createPopup() {
//   const body = document.querySelector('body');
//   const projectPopup = document.querySelector('.popupPage');
//   const popupContent = document.createElement('div');
//   popupContent.innerHTML = `
//       <div class="project">
//         <img class="project_img" src='${item.img}' alt="project1-img" />
//         <div class="projectContent">
//           <h3 class="project1-content-sec1">
//           ${item.Name}
//           </h3>
//           <button class="projectBtn" type="button" title="see-project">${item.popupBtn}</button>
//         </div>
//       </div>
    
//     `;
//   body.appendChild(projectPopup);
//   projectPopup.appendChild(popupContent);
//   projectPopup.style.disply = 'block';
// }

// const projectBtn = document.querySelectorAll('.projectBtn');
// projectBtn.addEventListener('click', () => {
//   createPopup();
  

//   // projectPopup.style.animation = 'fadeOut 4s';
// });
// // //   workStart.className ="start";
// // //   workStart.innerHTML="<h2 class="myworkHeader">My Recent Works<span>.</span></h2>
// // //   "
