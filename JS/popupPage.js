import './projects.js';

// popup page

// get the div that includes the popup page
// const popupPage = document.querySelector('#popupPage');

// Get the x element that closes the modal
const pageX = document.querySelector('.pageX');

const projectPopup = document.querySelector('.popupPage');
const popupContent = document.createElement('div');



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
const projectBtn = document.querySelectorAll('.projectBtn');
projectBtn.onclick = popupPAGE();
