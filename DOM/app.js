const input = document.getElementById("input");
const btn = document.getElementById("add");
const container = document.querySelector(".container");
const ulElement = document.querySelector(".list");
let liElement;
let deleteIcon;

// btn.addEventListener("click", () => {
//     if(input.value === " "){
//         alert("Please write something!");
//     }
//     else{
//         container.style.cssText = `
//             border: 1px solid black;
//             margin-top: 50px;
//         `; 
//         const liElement = document.createElement("li");
//         liElement.className = "list-item";
//         liElement.innerText = input.value;
//         ulElement.appendChild(liElement);
//         input.value = " ";
//         liElement.style.cssText = `
//             border: 1px solid red;
//             list-style-type: none;
//             margin: 10px;
//         `;
//     }
// });

eventlisteners();
function eventlisteners(){
    btn.addEventListener("click", addToList);
}
function cssTexts(){
    container.style.cssText = `
        border: 1px solid black;
        margin-top: 50px;
    `;
    liElement.style.cssText = `
        border: 1px solid red;
        margin-top: 10px;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    `;
}
function addToList(e){
    if(input.value === " "){
        alert("Please write something!");
    }
    else{
        addToUI();
        cssTexts();
    }
    e.preventDefault();
}
function addToUI(){
    liElement = document.createElement("li");
    liElement.className = "list-item";
    liElement.innerText = input.value;
    deleteIcon = document.createElement("a");
    deleteIcon.href = "#";
    deleteIcon.innerHTML += `<i class="fa-solid fa-x"></i>`;
    ulElement.appendChild(liElement);
    liElement.appendChild(deleteIcon);
    deleteIcon.onclick = function(e){
        e.target.parentElement.parentElement.remove();
    }
    input.value = " ";
}

