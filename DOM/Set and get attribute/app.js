const main = document.querySelector(".main");
const mountain = document.getElementById("mountain");
const dark = document.getElementById("dark");
const dog = document.getElementById("dog");
const pics = document.getElementsByClassName("i");
const imgs = document.getElementsByClassName("imgs");

mountain.addEventListener("click", () => {
    main.setAttribute("id", "toMountain");
})
dark.addEventListener("click", () => {
    main.setAttribute("id", "toDark");
})
dog.addEventListener("click", () => {
    main.setAttribute("id", "toDog");
})