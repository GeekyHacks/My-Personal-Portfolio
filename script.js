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
  modal.classList.toggle("showMenu");
  modal.style.animation = "fadeIn 1s";
});

menuX.addEventListener("click", () => {
  modal.style.animation = "fadeOut 4s";
  modal.classList.toggle("showMenu");
});

menuItems.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.toggle("showMenu");
  });
});


//popup page
//get the popup page
const projectPopup = document.querySelector("#popupPage");

// get the div that includes the popup page
const popupPage= document.querySelector("#popupPage")
// Get the button that open popup page
const projectBtn = document.querySelectorAll(".projectBtn");

// Get the x element that closes the modal
const pageX = document.querySelector(".pageX");

// projectBtn.addEventListener("click", () => {
//   const projectPopup = popupPage();
//   projectPopup.style.animation = "fadeIn 1s";
//   projectPopup.classList.toggle("showProject");
// });

projectBtn.forEach((element) => {
  element.addEventListener("click", () => {
    projectPopup.classList.toggle('showPage')
    projectPopup.style.animation = "fadeIn 1s";
  
  });
});

pageX.addEventListener("click", () => {
  projectPopup.style.animation = "fadeIn 1s";
  projectPopup.classList.toggle("showPage");
});
