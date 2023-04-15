"use strict"
// let word  = "Men Lenkeranda yasayiram";
// let update = word.slice(3, 12);
// update = word.padEnd(50, "*")
// update = word.split(" ")
// update[0] = "sen"
// console.log(update);

// let word = "azerbaycanliyam";
// let count = 0;
// let herf = "y";
// for(let i = 0; i < word.length; i++){
//     if(word.charAt(i) == herf){
//         count += 1;
//     }
// }
// console.log(count);

// function search(word, letter){
//     let count = 0;
//     for(let i = 0; i < word.length; i++){
//         if(word.charAt(i) === letter){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(search("azerbaycanliyam", "a"));




let word = "Men bu gun Bakiya gedirem ki, yaxsi dincelim.Gelende kime ne alim? Kiminse ureyi ne ise istese gedib ozu alar...";
// let wordLength = word.length;
// let update = word.split(" ")
// let word2 = word.replace("Men", "biz")
// console.log(update[1]);
// console.log(word2);

// function update(){
//     let update = word.replaceAll(" ","")
//     return update;
// }
// console.log(update());

// function search(){
//     let letter = [];
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === word[i].toLocaleUpperCase() && word[i]!==' ' ){
//             letter.push(word[i])
//         }
//     }
//     return letter
// }
// console.log(search());

// function search(){
//     let bosluq = [];
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === " "){
//             bosluq.push(word[i]);
//         }
//     }
//     return bosluq;
// }
// console.log(search());

function search(){
    let arr = [];
    for(let i = 0; i < word.length; i++){
        for(let j = i + 1; j < word.length; j++){
            if(word[i] === word[j] && word[i] !== " " && word[i] !== "."){
                arr.push(word[i]);
                break;
            }
        }
    }
    const obj = {};
    arr.forEach((el) => {
        obj[el] = (obj[el] || 0) + 1
    })
    // return obj;
    const update = Array.from(new Set(arr));
    return update;
}

console.log(search());