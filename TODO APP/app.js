const form = document.querySelector(".form-control");
const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const infos = document.querySelector(".infos");
const ulElement = document.querySelector(".list");

let arr = [];
evenListeners();
function evenListeners(){
    form.addEventListener("submit", addInfo)
};

function addInfo(e){
    if(input.value === ""){
        alert("write somtehing");
    }
    else{
        const liElement = document.createElement("li");
        liElement.className = "list-value";
        liElement.innerHTML = input.value;
        infos.style.cssText = `
        border: 1px solid brown;
        border-radius: 10px;
        width: 600px;
        padding: 20px 100px;
        `;
        liElement.style.cssText = `
        list-style-type: none;
        border: 1px solid blue;
        padding: 3px;
        margin-bottom: 10px;
        position: relative;
        `
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete";
        ulElement.appendChild(liElement);
        ulElement.appendChild(editBtn);
        ulElement.appendChild(deleteBtn);
        arr.push(liElement);
        input.value = "";
        e.preventDefault();
        deleteBtn.addEventListener("click", () => {
            liElement.remove();
            editBtn.remove();
            deleteBtn.remove();
        });
        editBtn.addEventListener("click", () => {
            input.value = liElement.innerText;
            editBtn.addEventListener("click", () => {
                for(let i = 0; i < arr.length; i++){
                    arr[i].innerText = input.value;
                }
            })
        })
    }
}

console.log(arr);