const form = document.querySelector(".form-control");
const input = document.getElementById("input");
const list = document.querySelector(".list");
const btn = document.querySelector(".addBtn");
const clear = document.querySelector(".clear-all");
let memory;
evenListeners();
function evenListeners(){
    form.addEventListener("submit", addTask);
    clear.addEventListener("click", clearAll);
}
function clearAll(e){
    alert("Are you sure?");
    if(confirm){
        list.remove();
    }
}
function addTask(e){
    if(input.value === ""){
        btn.innerText = "ADD";
        memory.innerText = input.value;
        return false;
    }
    if(btn.innerText === "ADD"){
        addTaskToUI(input.value);
    }
    else{
        memory.innerText = input.value;
        btn.innerText = "ADD";
        input.value = " ";
    }
    e.preventDefault();
}
let content = input.value;
function addTaskToUI(content){
    const li = document.createElement("li");
    li.style.listStyleType = "none";
    const span = document.createElement("span");
    span.innerText = content;
    const editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.className = "edit"
    const delBtn = document.createElement("button");
    delBtn.innerText = "DELETE";
    delBtn.className = "delete";
    delBtn.addEventListener("click", () => {
        li.remove();
    });
    editBtn.addEventListener("click", () => {
        memory = span;
        btn.innerText = "EDIT";
        input.value = span.innerText
    })
    li.append(span, editBtn, delBtn);
    list.appendChild(li);
    input.value=" ";
}