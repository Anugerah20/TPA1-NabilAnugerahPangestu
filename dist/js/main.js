// Proses hamburger menu
const hamburgerMenu = document.querySelector(".navbar-link");
document.querySelector("#hamburger-menu").onclick = () => {
  hamburgerMenu.classList.toggle("active");
};

const closeHamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!closeHamburger.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    hamburgerMenu.classList.remove("active");
  }
});
