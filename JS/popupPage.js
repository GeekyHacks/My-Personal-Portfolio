
// popup page
// get the div that includes the popup page
// const popupPage = document.querySelector('#popupPage');

// Get the x element that closes the modal
// const pageX = document.querySelector('.pageX');
// const body = document.querySelector('body');
// const projectBtn = document.querySelectorAll('.projectBtn');
// projectBtn.addEventListener('click', () => {

//   const projectPopup = document.querySelector('.popupPage');
//   const popupContent = document.createElement('div');
//   popupContent.innerHTML = `
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
// projectPopup.classList.toggle('showPage')
// projectPopup.style.animation = 'fadeOut 4s';
// projectPopup.appendChild(popupContent);
// body.appendChild(projectPopup);
// });

// function popupPAGE(projectsarrayId) {
//   // get the popup page
//   const projectPopup = document.querySelector('.popupPage');
//   const popupContent = document.createElement('div');

//   popupContent.id = 'popupContentID';

//   projectPopup.innerHTML = `
// <div class="poppage">
// <div class="desktop-content">
//   <div class="first-section">
//     <h1 class="title-desktop">
//     ${projectsarray[projectsarrayId].title}
//     </h1>
//     <ul class="poppage-buttons">
//       <li>
//         <a href="${projectsarray[projectsarrayId].liveVersion}" tabindex="0">
//           See live<img
//             src="./assests/images/see live icon.svg"
//             alt="see live"
//         /></a>
//       </li>
//       <li>
//         <a
//           href="${projectsarray[projectsarrayId].sourecLink}"
//           tabindex="0"
//         >
//           See Source<img
//             src="./assests/images/git.svg"
//             alt="project source code"
//           />
//         </a>
//       </li>
//     </ul>
//   </div>
//   <ul class="labels">
//     <li>Codekit</li>
//     <li>GitHub</li>
//     <li>JavaScript</li>
//     <li>Bootstrap</li>
//     <li>Terminal</li>
//     <li>Codepen</li>
//   </ul>
//   <p class="p-1">
//     Lorem Ipsum is simply dummy text of the printing and
//     typesetting industry. Lorem industry/'s standard dummy
//     text ever since the 1500s, when an unknown printer
//     took a galley of type and scrambled it 1960s.
//   </p>
// </div>
// </div>

// `;
//   projectPopup.appendChild(popupContent);
//   popupContent.style.display = 'flex';
//   projectPopup.style.animation = 'fadeIn 1s';
// }

// Get the button that open popup page
