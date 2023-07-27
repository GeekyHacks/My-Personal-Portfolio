import { projectsarray } from './projects.js';

// popup page
// get the div that includes the popup page

const projectPopup = document.querySelector('.popupPage');
const projectBtn = document.querySelectorAll('.projectBtn');

projectBtn.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    const cardIndex = btnIndex;
    projectPopup.innerHTML = `
        <div class="popup">
    
        <div class="desktop-content">
        <div class="firstSectionDesk">
          <div class="closeImgDiv"><img class="pageX" src="assests/images/x.svg" alt="close" /></div>
  
          <div class="popupImgDiv"><img src="${projectsarray[cardIndex].popImg}" alt="Medical Illustration Sets" class="poppageDesktopImg" /></div>
        </div>
  
        <div class="secondSectionDesk">
          <h1 class="title-desktop">${projectsarray[cardIndex].Name}</h1>
          <ul class="poppage-buttons">
            <li>
              <a href="${projectsarray[cardIndex].liveVersion}" tabindex="0"> See live<img src="assests/images/see live icon.svg" alt="see live" /></a>
            </li>
            <li>
              <a href="${projectsarray[cardIndex].sourecLink}" tabindex="0"> See Source<img src="assests/images/git.svg" alt="project source code" /> </a>
            </li>
          </ul>
        </div>
        <div class="thirdSectionDesk">
          <ul class="labels">
          <li class="small-li" for="html">${projectsarray[cardIndex].technologies[0]}</li>
          <li class="small-li" for="JS">${projectsarray[cardIndex].technologies[1]}</li>
          <li class="small-li" for="CSS">${projectsarray[cardIndex].technologies[2]}</li>
          <li class="big-li" for="Ruby">${projectsarray[cardIndex].technologies[3]}</li>
          </ul>
          <p class="p-1">${projectsarray[cardIndex].description}</p>
        </div>
      </div>

      <div class="mobile-content">
        <div class="closeImgDiv"><img class="pageX" src="assests/images/x.svg" alt="close" /></div>
        <div class="firstSectionMob">
          <h1 class="title-mobile">${projectsarray[cardIndex].Name}</h1>
          <ul class="labels">
            <li>Ruby and Rails</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <p class="p-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
        </div>
        <ul class="poppage-buttons">
          <li>
            <a href="${projectsarray[cardIndex].liveVersion}">
              See live
              <img src="assests/images/see live icon.svg" alt="see live"
            /></a>
          </li>
          <li>
            <a href="${projectsarray[cardIndex].sourecLink}">
              See Source
              <img src="assests/images/git.svg" alt="project source code" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    `;

    projectPopup.style.display = 'flex';

    const closebtn = document.querySelector('.pageX');
    closebtn.addEventListener('click', () => {
      projectPopup.style.display = 'none';
    });
  });
});
