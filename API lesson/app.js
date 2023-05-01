// const start = document.querySelector(".startBtn");
// const stop = document.querySelector(".stopBtn");
// const show = document.querySelector(".show");
// let counter;
// let num = 0;
// // document.querySelector(".clock").innerText = `${watch.innerText},:${minute.innerText},:${second.innerText}`

// start.addEventListener("focus", () => {
//     if(start.innerText === "Start"){
//         counter = setInterval(() => {
//             num++;
//             show.innerText = clock(num);
//         }, 1000)
//     }
// });
// stop.addEventListener("focus", () => {
//     if(stop.innerText === "Stop"){
//         clearInterval(counter);
//     }
// })

// function clock(a){
//     let second = a % 60;
//     let minute = parseInt((a - second) / 60);
//     if(minute < 10){
//         minute = "0" + minute;
//     }
//     if(second < 10){
//         second = "0" + second;
//     }
//     return `${minute}:${second}`;
// }
const table = document.getElementById("table");
const id = document.querySelector(".id-content");
const desc = document.querySelector(".desc-content");
const name = document.querySelector(".name-content");


fetch("https://northwind.vercel.app/api/categories").then(res => res.json())
.then(data => data.forEach(element => {
    id.innerText = element.id
    console.log(element);
}))