"use strict";
/* ===== HEADER SCROLL ===== */
const header = document.querySelector("#header");

// Revealing header on scroll
function scrollHeader() {
  const scroll = this.scrollY;

  if (scroll >= 100) {
    header.classList.add("scroll-up");
  } else {
    header.classList.remove("scroll-up");
  }
}
window.addEventListener("scroll", scrollHeader);

/* ===== MOBILE NAVIGATION ===== */
const menuBar = document.querySelector(".menu-bar");
const CloseBar = document.querySelector(".close-bar");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

/*  Display/Hide Mobile Navigation */
function showNav() {
  navMenu.classList.toggle("show");
}

// Display Mobile Navigation
menuBar.addEventListener("click", showNav);
// Hide Mobile Navigation
CloseBar.addEventListener("click", showNav);

// Remove Nav menu when each link clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

/* ===== BACK TO TOP ===== */
const toTop = document.querySelector("#to-top");

function toTopBtn() {
  if (this.scrollY >= 200) {
    toTop.style.bottom = "20px";
  } else {
    toTop.style.bottom = "-100px";
  }
}
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", toTopBtn);
toTop.addEventListener("click", backToTop);

/* ===== ACTIVE NAV MENU SCROLLSPY ===== */
// Attach a scroll event listener to the window object
window.addEventListener("scroll", function () {
  // Get the current scroll position of the window
  const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

  // Define the IDs of the selected sections
  const sectionIds = ["hero", "menu", "about", "contact"];

  // Loop through the selected section IDs
  for (var i = 0; i < sectionIds.length; i++) {
    const sectionId = sectionIds[i];

    // Get the corresponding section element by its ID
    const section = document.getElementById(sectionId);

    // Get the position and height of the section
    const sectionPos = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the range of the section
    if (
      currentScrollPos >= sectionPos &&
      currentScrollPos < sectionPos + sectionHeight
    ) {
      // Add an "active" class to the corresponding link in the navigation menu
      const navLink = document.querySelector(
        "nav a[href='#" + sectionId + "']"
      );
      // console.log(`sectionId: ${sectionId},
      // currentScrollPos: ${currentScrollPos},
      // sectionPos: ${sectionPos},
      // sectionHeight: ${sectionHeight}`);
      navLink.classList.add("active");
    } else {
      // Remove the "active" class from the corresponding link in the navigation menu
      const navLink = document.querySelector(
        "nav a[href='#" + sectionId + "']"
      );
      navLink.classList.remove("active");
    }
  }
});
