const main = document.querySelector(".main");
const mountain = document.getElementById("mountain");
const dark = document.getElementById("dark");
const dog = document.getElementById("dog");

mountain.addEventListener("click", () => {
    main.setAttribute("id", "toMountain");
})
dark.addEventListener("click", () => {
    main.setAttribute("id", "toDark");
})
dog.addEventListener("click", () => {
    main.setAttribute("id", "toDog");
})