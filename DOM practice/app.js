const light = document.querySelector(".fa-moon");
const image = document.querySelector("img")
let rotate = 0;
light.addEventListener("click", mode);
function mode(){
    if(light.className.includes("fa-moon")){
        light.classList.remove("fa-moon");
        light.classList.add("fa-sun");
        document.body.style.backgroundColor = "black";
        rotate += 360;
        image.style.transform = 'rotateY(' + rotate + 'deg)';
    }
    else{
        light.classList.remove("fa-sun");
        light.classList.add("fa-moon");
        document.body.style.backgroundColor = "white";
        rotate -= 360;
        image.style.transform = 'rotateY(' + rotate + 'deg)';
    }
}