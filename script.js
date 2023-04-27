const menuBtn = document.querySelector("#menu-button");
const menuImg = document.querySelector("#menuBtn");
const menuPage = document.createElement("div");

// Injecting menuPage into document
menuPage.className = "menuPage";
menuPage.innerHTML = (
  <ul class="desktop-header">
    <li class="header-1">
      <a href="popuppage.html"> Portfolio </a>
    </li>
    <li class="header-1">
      <a href="index.html"> About </a>
    </li>
    <li class="header-1">
      <a href="Contact"> Contact </a>
    </li>
  </ul>
);

document.body.appendChild(menuPage);

function menuDisplay() {
  console.log("been clicked");
}

menuBtn.addEventListener("click", menuDisplay);
