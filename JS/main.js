// menu popup
// Get the modal

const modal = document.querySelector('#menuPage');
// Get the button that opens the modal
const menubtn = document.querySelector('#menuBtn');
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
