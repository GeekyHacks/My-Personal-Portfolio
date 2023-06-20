
// popup page
// get the popup page
const projectPopup = document.querySelector('#popupPage');

// get the div that includes the popup page
// const popupPage = document.querySelector('#popupPage');

// Get the button that open popup page
const projectBtn = document.querySelectorAll('.projectBtn');

// Get the x element that closes the modal
const pageX = document.querySelector('.pageX');

projectBtn.forEach((element) => {
  element.addEventListener('click', () => {
    projectPopup.classList.toggle('showPage');
    projectPopup.style.animation = 'fadeIn 1s';
  });
});

pageX.addEventListener('click', () => {
  projectPopup.style.animation = 'fadeIn 1s';
  projectPopup.classList.toggle('showPage');
});