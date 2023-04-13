"use strict"

// function arrayMax(){
//     let arr = [23, 35, 6, 1, 34, 776, 775];
//     let cem = 0;
//     for(let i = 0; i < arr.length; i++){
//         cem += arr[i];
//     }
//     return cem;
// }
// console.log(arrayMax());


// let arr = [1, 2, 1, 3, 3, 4, 1, 2, 5, 4, 6, 6];
// let eyni = [];
// let index = 0;

// function findSameElements(){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 eyni.push(arr[i]);
//             }
//         }
//     }
//     const update = Array.from(new Set(eyni));
//     return update;
// }
// console.log(findSameElements());

// let arr2 = [2, 9, -5, -4, "Azerbaycan", true, 12, "LANKARAN", "LimOn", 182, 4, false, undefined, 98];
// function sorting(){
//     let numbers = [];
//     let strings = [];
//     let booleans = [];
//     for(let key of arr2){
//         if(typeof key === "number"){
//             numbers.push(key);
//         }
//         else if(typeof key === "string"){
//             strings.push(key);
//         }
//         else if(typeof key === "boolean"){
//             booleans.push(key)
//         }
//     }
//     console.log(numbers);
//     console.log(strings);
//     console.log(booleans);
// }
// sorting();

let arr = [2, -6, -4, 997, 12, 26, 8, 3, 7];
function finding(){
    let cutMax = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(cutMax < arr[i] && arr[i] % 2 === 0){
            cutMax = arr[i];
        }
    }
    return cutMax;
}
console.log(finding());