// Menu Bar On-click
var ctr = 1;
var menuActive = false;
const rootMenu = document.getElementById("root-menu");
const hamburgerIcon = document.getElementById("1");
const close = document.getElementById("2");

const menuClick = () => {
  rootMenu.innerHTML = `
<div class="list-group-container">
  <div id="list-group" class="list-group" 
  >
  
    <a href="#" id="menu-first-c" class="menulist">
      About
    </a>
    <a href="#" id="menu-c" class="menulist">
      Portfolio
    </a>
    <a href="#" id="menu-c" class="menulist">
      Services
    </a>
    <a href="#" id="menu-last-c"class="menulist">
      Contact
    </a>
  </div>
  </div>
  
  `;
  const listGroup = document.getElementById("list-group");

  if (ctr % 2 == 1) {
    hamburgerIcon.className = "burger180";
    close.className = "close90";

    rootMenu.style.display = "block";

    listGroup.className = "list-group";
    setTimeout(() => {
      listGroup.className = "list-group--translated";
      menuActive = true;
    }, 100);
  } else {
    hamburgerIcon.className = "burger";
    close.className = "close";

    listGroup.className = "list-group--translated";

    setTimeout(() => {
      listGroup.className = "list-group";
      menuActive = false;
      setTimeout(() => {
        rootMenu.style.display = "none";
      }, 100);
    }, 20);
  }
  ctr++;
};

// @media (min-width: 799)
function chkMediaQ799() {
  if (window.innerWidth > 799) {
    document.getElementById("header-maintenance-id").textContent =
      "My Portfolio is still under maintenance. Please wait for more updates!";

    if (menuActive) {
      rootMenu.style.display = "none";
    }
  } else {
    document.getElementById("header-maintenance-id").textContent =
      "Under Maintenance!";
    if (menuActive) {
      rootMenu.style.display = "block";
    }
  }
}

function chkMediaQ100() {
  if (window.innerWidth > 100) {
    document.getElementById("header-maintenance-id").textContent =
      "My Portfolio is still under maintenance. Please wait for more updates!";

    if (menuActive) {
      rootMenu.style.display = "none";
    }
  } else {
    document.getElementById("header-maintenance-id").textContent =
      "Under Maintenance!";
    if (menuActive) {
      rootMenu.style.display = "block";
    }
  }
}

// Event Listeners
window.addEventListener("resize", chkMediaQ799);
window.addEventListener("DOMContentLoaded", chkMediaQ799);

$(document).click(function (event) {
  const listGroup = document.getElementById("list-group");

  var $target = $(event.target);

  if (
    !$target.closest("#hamburger-menu").length &&
    !$target.closest("#menu-first-c").length &&
    !$target.closest("#menu-c").length &&
    !$target.closest("#menu-last-c").length &&
    menuActive
  ) {
    hamburgerIcon.className = "burger";
    close.className = "close";

    listGroup.className = "list-group--translated";

    setTimeout(() => {
      listGroup.className = "list-group";
      menuActive = false;
      setTimeout(() => {
        rootMenu.style.display = "none";
      }, 100);
    }, 20);

    ctr++;
  }
});

const toggleElement = document.getElementById("toggle-btn");
const testId = document.getElementById("test-id");
const izt = document.getElementById("izt");

$(toggleElement).on("click", (e) => {
  testId.classList.toggle("first-test");
  izt.classList.toggle("izt-display");
});

// Smooth Scrolling
