const menuBar = document.querySelector(".menu-bars");
const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector("ul");
const header = document.querySelector("header");

menuBar.onclick = () => {
  menuContainer.classList.toggle("hidden");
  header.classList.toggle("menu-bg-toggle");
  menu.classList.toggle("ul-dropdown-ani");
};
