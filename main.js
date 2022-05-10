const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-version-nav");
const mobileMenuItems = document.querySelectorAll(".mobile-version-nav .mobile-menu-items li");


menuIcon.addEventListener("click",() => {mobileNav.classList.add("active");});