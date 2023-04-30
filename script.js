// Get the modal
var modal = document.getElementById("menuPage");

var menuContent = document.getElementById("menuPageContent");

var bodyContent = document.getElementById("bodyContent");

// Get the button that opens the modal
var menubtn = document.getElementById("menuBtn");

//get menu options to use it for hidemenu function
let menuItems = document.getElementsByClassName(".menuPageList > li a");

menuItems.onclick = function () {
  hideMenu();
};

function hideMenu() {
  
  modal.style.position = "fixed";
  modal.style.background = "transparent";
 
 modal.style.animation = "fadeOut 4s";
 modal.style.display = "none";

}

// Get the x element that closes the modal
var xclose = document.getElementsByClassName("xclose")[0];

// When the user clicks on the button, open the modal
menubtn.onclick = function () {
  modal.style.display = "block";
  modal.style.animation = "fadeIn 1s";
};

// When the user clicks on  (x), close the modal
function fadeOut() {
  modal.style.animation = "fadeOut 3s";
  modal.style.display = "none";
}
xclose.onclick = function () {
  fadeOut();
};
