// Get the modal
const modal = document.getElementById('menuPage');

// const menuContent = document.getElementById('menuPageContent');

// const bodyContent = document.getElementById('bodyContent');

// Get the button that opens the modal
const menubtn = document.getElementById('menuBtn');

// get menu options to use it for hidemenu function
const menuItems = document.getElementsByClassName('.menuPageList > li a');

function hideMenu() {
  modal.style.position = 'fixed';
  modal.style.background = 'transparent';
  modal.style.animation = 'fadeOut 4s';
  modal.style.display = 'none';
}

menuItems.onclick = hideMenu();

// Get the x element that closes the modal
const xclose = document.getElementsByClassName('xclose')[0];

// When the user clicks on the button, open the modal
function displayMenu() {
  modal.style.display = 'block';
  modal.style.animation = 'fadeIn 1s';
}

menubtn.onclick = displayMenu();

// When the user clicks on  (x), close the modal
function fadeOut() {
  modal.style.animation = 'fadeOut 3s';
  modal.style.display = 'none';
}

xclose.onclick = fadeOut();
