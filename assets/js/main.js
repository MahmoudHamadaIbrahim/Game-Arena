const myCarousel = document.querySelector("#myCarousel");
const carousel = new bootstrap.Carousel(myCarousel);
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle.classList.contains("show")) {
      bsCollapse.hide();
    }
  });
});

document.getElementById("prevBtn").addEventListener("click", () => {
  carousel.prev();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  carousel.next();
});
