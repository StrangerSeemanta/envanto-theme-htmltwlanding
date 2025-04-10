// Toggling Drawer for mobile navigation
const menuBar = document.querySelectorAll(".menuBar");
const drawer = document.querySelector(".mobile-nav-drawer");
const header = document.getElementsByTagName("header");
menuBar.forEach((bar) => {
  bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    drawer.classList.toggle("open");
    if (drawer.classList.contains("open")) {
      header[0].style.position = "sticky";
    } else {
      header[0].style.position = "static";
    }
  });
});
