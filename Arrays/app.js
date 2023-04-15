"use strict"
// let start = 1;
// let end = 100;
// let sum = (start + end / 2) * (end / 2);
// console.log(sum);

// 1--n

// let n = 100;
// let arr = [];
// for(let i = 0; i < n; i++){
//     if(i % 3 == 0){
//         arr.push(i);
//     }
// }
// console.log(arr.length);

// let arr = [1, 2, -5, 2, 14, 222, 12, 99];

// let tek_min = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(tek_min > arr[i] && arr[i]%2!==0){
//         tek_min = arr[i];
//     }
// }
// console.log(tek_min);

// let max = arr[0];
// let maxI =0

// let min = arr[0];
// let minI =0


// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//         maxI=i
//     }
//     if(min > arr[i]){
//         min = arr[i];
//         minI=i

//     }
// }
// console.log(max);
// console.log(min);

// console.log("senden once",arr);

// arr[maxI]= min
// arr[minI]=max

// console.log("senden sonra",arr);

//=====EV TAPSIRIGI=======
const arr = [7,55,32,91,87,21,74,252,2,-6,42,15,-41];
let maxCut = arr[0];
let minTek = arr[0];
for(let i = 0; i < arr.length; i++){
    if(maxCut < arr[i] && arr[i] % 2 === 0){
        maxCut = arr[i];
    }
    if(minTek > arr[i] && arr[i] % 2 !== 0){
        minTek = arr[i];
    }
}
console.log(maxCut);
console.log(minTek);
console.log("Evvel",arr);

function move(){
    let maxElement = arr.indexOf(maxCut);
    let minElement = arr.indexOf(minTek);
    arr.splice(minElement, 1, maxCut);
    arr.splice(maxElement, 1, minTek);
    return arr;
}
console.log("Sonra",move());