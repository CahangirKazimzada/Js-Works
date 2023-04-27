const menubar = document.querySelector(".menu-bar");
const navbar = document.querySelector("nav");
const x = document.querySelector(".x-icon");
const opacity = document.querySelector(".opacity");

menubar.addEventListener("click", () => {
    navbar.style.width = "1200px";
    menubar.style.display = "none";
    menubar.style.width = "0";
    opacity.style.width = "100%"
});

x.addEventListener("click", () => {
    navbar.style.width = "0px";
    menubar.style.display = "block";
    opacity.style.width = "0";
})