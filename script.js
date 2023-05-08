//menu popup
// Get the modal
const modal = document.querySelector("#menuPage");
// Get the button that opens the modal
const menubtn = document.querySelector("#menuBtn");

// Get the x element that closes the modal
const menuX = document.querySelector(".menuX");

// get menu options to use it for hidemenu function
const menuItems = document.querySelectorAll(".menuPageList > li a");

// const menuContent = document.getElementById('menuPageContent');

// const bodyContent = document.getElementById('bodyContent');

menubtn.addEventListener("click", () => {
  modal.classList.toggle("show");
  modal.style.animation = "fadeIn 1s";
});

menuX.addEventListener("click", () => {
  modal.style.animation = "fadeOut 4s";
  modal.classList.toggle("show");
});

menuItems.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.toggle("show");
  });
});


//popup page

//get the popup page
const projectPopup= document.querySelector('#projectPopup');
// Get the button that open popup page
const projectBtn = document.querySelector("#projectBtn");

// Get the x element that closes the modal
const pageX = document.querySelector(".menuX");