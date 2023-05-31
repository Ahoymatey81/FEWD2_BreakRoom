// ------- HAMBURGER MENU TOGGLE -------
const menuBtn = document.querySelector(".navbar-toggle");
const closeBtn = document.querySelector(".navbar-close");
const navMenuCtn = document.querySelector(".navbar-menu-container");
const navItems = document.querySelectorAll(".navbar-menu .navbar-item");

menuBtn.addEventListener("click", () => {
    navMenuCtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenuCtn.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navMenuCtn.classList.remove("active");
    });
});

// ------- STICKY NAVIGATION -------
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// ------- ACCORDION -------
const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.aHeader');

  accordionHeader.addEventListener('click', e => {
    accordion.classList.toggle('isOpen');
  })
})

