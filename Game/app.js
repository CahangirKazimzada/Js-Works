// const turtle = document.getElementById("img");
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", (e) => {
//     switch(e.key){
//         case "ArrowUp":
//             y -= 50;
//             console.log("yuxari");
//             turtle.style.transform = `translate(${x}px, ${y}px)`;
//         break;
//         case "ArrowDown":
//             y += 50;
//             console.log("asagi");
//             turtle.style.transform = `translate(${x}px, ${y}px)`;
//         break;
//         case "ArrowRight":
//             x += 50;
//             console.log("saga");
//             turtle.style.transform = `translate(${x}px, ${y}px)`;
//         break;
//         case "ArrowLeft":
//             x -= 50;
//             console.log("sola");
//             turtle.style.transform = `translate(${x}px, ${y}px)`;
//         break;
//     }
// })

let show = document.querySelector(".show")
const btns = document.querySelectorAll("button");
let zero = 0;
btns[0].addEventListener("click", () => {
    show.innerHTML = "0.00";
});
btns[1].addEventListener("click", () => {
    show.innerHTML = "30.0";
});
btns[2].addEventListener("click", () => {
    show.innerHTML = "60.0";
});
btns[3].addEventListener("click", () => {
    show.innerHTML = "90.0";
});
btns[4].addEventListener("click", () => {
    show.innerHTML = "120.0";
});
btns[5].addEventListener("click", () => {
    show.innerHTML =(+show.innerHTML + 10).toFixed(1);
})
btns[6].addEventListener("click", () => {
    show.innerHTML =(+show.innerHTML - 10).toFixed(1);
    if(show.innerHTML < 0){
        show.innerHTML = 0.00;
    }
})

document.addEventListener("keydown", (e) => {
    switch(e.key){
        case "m".toLocaleLowerCase():
            show.innerHTML = "0.00";
            break;
        case "1":
            show.innerHTML = "30.0";
            break;
        case "2":
            show.innerHTML = "60.0";
            break;
        case "3":
            show.innerHTML = "90.0";
            break;
        case "4":
            show.innerHTML = "120.0";
            break;
        case "ArrowRight":
            show.innerHTML =(+show.innerHTML + 10).toFixed(1);
            break;
        case "ArrowLeft":
            show.innerHTML =(+show.innerHTML - 10).toFixed(1);
            if(show.innerHTML < 0){
                show.innerHTML = zero.toFixed(1);
            }
            break;
        default:
            alert("not found");
            break;
    }
})