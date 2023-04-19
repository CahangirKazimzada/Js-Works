const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2")
const box = document.querySelector(".box");

btn1.addEventListener("click", () => {
    box.style.cssText = `
        width: 200px;
        height: 400px;
        background-color: yellow;
        border: 2px solid black;
        margin-top: 50px;
        margin-left: 200px;
        transition: 200ms;
    `
})
btn2.addEventListener("click", () => {
    box.style.cssText = `
        width: 250px;
        height: 250px;
        background-color: darkgreen;
        border: 2px solid black;
        margin-top: 50px;
        margin-left: 200px;
        border-radius: 50%;
        transition: 200ms;
    `
})