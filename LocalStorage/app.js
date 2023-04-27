const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const course = document.getElementById("course")
const submitBtn = document.querySelector(".submit");
const form = document.querySelector(".form");
const search = document.getElementById("search");
const searchBtn = document.querySelector(".searchBtn")


let arr = [];

if(JSON.parse(localStorage.getItem("data")) !== null){
    arr = JSON.parse(localStorage.getItem("data"));
}

form.addEventListener("submit", (e) => {
    let obj = {
        name: "",
        surname: "",
        age: "",
        course: "",
    }
    obj.name = name.value;
    obj.surname = surname.value;
    obj.age = age.value;
    obj.course = course.value;
    arr.push(obj);

    localStorage.setItem("data", JSON.stringify(arr));

    console.log(JSON.parse(localStorage.getItem("data")));

    e.preventDefault();
})
let sum = 0
searchBtn.addEventListener("click", () => {
    arr.forEach((i) => {
        if(search.value === i.name){
            
            sum ++
        }
        
    })

    if(sum>0){
        alert("telebe tapildi")
    }
    else if(sum==0){
        alert("telebe tapilmadi")
    }
})
