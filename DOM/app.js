const input = document.getElementById("input");
const btn = document.getElementById("add");
const container = document.querySelector(".container");
const ulElement = document.querySelector(".list");

btn.addEventListener("click", () => {
    if(input.value === " "){
        alert("Please write something!");
    }
    else{
        container.style.cssText = `
            border: 1px solid black;
            margin-top: 50px;
        `; 
        const liElement = document.createElement("li");
        liElement.className = "list-item";
        liElement.innerText = input.value;
        ulElement.appendChild(liElement);
        input.value = " ";
        liElement.style.cssText = `
            border: 1px solid red;
            list-style-type: none;
            margin: 10px;
        `;
    }
});