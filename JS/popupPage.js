import { projectsarray, createProjects } from './projects.js';

// popup page
// get the div that includes the popup page

const projectPopup = document.querySelector('.popupPage');
const projectBtn = document.querySelectorAll('.projectBtn');

projectBtn.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    const cardIndex = btnIndex;
    projectPopup.innerHTML = `
    <div class="popup">
    <div class="popuppage-header">
    <img
      class="pageX"
      src="assests/images/x.svg"
      alt="close"
    />
    <img
      src="${projectsarray[cardIndex].img}"
      alt="Medical Illustration Sets"
      class="poppage-desktop-img"
    />
  </div>
  <div class="poppage">
  <div class="desktop-content">
      <div class="first-section">
        <h1 class="title-desktop">
        ${projectsarray[cardIndex].Name}
        </h1>
        <ul class="poppage-buttons">
          <li>
            <a href="${projectsarray[cardIndex].liveVersion}" tabindex="0">
              See live<img
                src="assests/images/see live icon.svg"
                alt="see live"
            /></a>
          </li>
          <li>
            <a
              href="${projectsarray[cardIndex].sourecLink}"
              tabindex="0"
            >
              See Source<img
                src="assests/images/git.svg"
                alt="project source code"
              />
            </a>
          </li>
        </ul>
      </div>
      <ul class="labels">
        <li>Codekit</li>
        <li>GitHub</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Terminal</li>
        <li>Codepen</li>
      </ul>
      <p class="p-1">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem industry's standard dummy
        text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it 1960s.
      </p>
    </div>

    <div class="mobile-content">
      <h1 class="title-mobile">
      ${projectsarray[cardIndex].Name}
      </h1>
      <ul class="labels">
        <li>Ruby and Rails</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p class="p-1">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it 1960s.
      </p>
      <p class="p-2">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it 1960s.
      </p>
      <ul class="poppage-buttons">
        <li>
          <a href="${projectsarray[cardIndex].liveVersion}">
            See live
            <img
              src="assests/images/see live icon.svg"
              alt="see live"
          /></a>
        </li>
        <li>
          <a
            href="${projectsarray[cardIndex].sourecLink}"
          >
            See Source
            <img
              src="assests/images/git.svg"
              alt="project source code"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
    `;

    projectPopup.style.display = 'block';

    const closebtn = document.querySelector('.pageX');
    closebtn.addEventListener('click', () => {
      projectPopup.style.display = 'none';
      // body.style.backgroundColor = '#fff';
      body.style.backdropFilter = 'none';
    });
  });
});
