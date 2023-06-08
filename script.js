// menu popup
// Get the modal
const modal = document.querySelector('#menuPage');
// Get the button that opens the modal
const menubtn = document.querySelector('#menuBtn');

const submitBtn = document.querySelector('#submitBtn');

// Get the x element that closes the modal
const menuX = document.querySelector('.menuX');

// get menu options to use it for hidemenu function
const menuItems = document.querySelectorAll('.menuPageList > li a');

menubtn.addEventListener('click', () => {
  modal.classList.toggle('showMenu');
  modal.style.animation = 'fadeIn 1s';
});

menuX.addEventListener('click', () => {
  modal.style.animation = 'fadeOut 4s';
  modal.classList.toggle('showMenu');
});

menuItems.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.toggle('showMenu');
  });
});

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

//  save input values to localstorage
document.getElementById('name-input').value = getSavedValue('name-input'); // set the value to this input
document.getElementById('email-input').value = getSavedValue('email-input');
document.getElementById('textarea-input').value = getSavedValue('textarea-input');

// Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e) {
  const { id, val } = e; //  destructure
  // const id = e.id; // get the sender's id to save it .
  // const val = e.value; // get the value.
  // Every time user writing something, the localStorage's value will override .
  localStorage.setItem(id, val);
}

// get the saved value function - return the value of 'v' from localStorage.
function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return saveValue(); // You can change this to your defualt value.
  }
  return localStorage.getItem(v);
}

// the input valdiation
function InvalidMsg(input) {
  if (input.value === '') {
    input.setCustomValidity('Entering an email-id is necessary!');
  } else if (input.validity.patternMismatch) {
    input.setCustomValidity('Please enter a lowercase email address!');
  } else {
    input.setCustomValidity('');
  }

  return true;
}

submitBtn.addEventListener('click', () => {
  getSavedValue();
  InvalidMsg();
  saveValue();
});
