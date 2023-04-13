"use strict"
// let a = 23;
// let b = 45;
// let c = 22;

// if((a + b) > (b + c) && (a + c)){
//     console.log("big sum result:", a, b);
// }
// else if((b + c) > (a + b) && (a + c)){
//     console.log("big sum result:", b, c)
// }
// else{
//     console.log("big sum result:", a, c)
// }

// let month = prompt("month:");
// switch(month){
//     case "january":
//         console.log("31 days");
//         break
//     case "february":
//         console.log("28 days");
//         break
//     case "april":
//         console.log("30 days");  
//         break  
// }


// for(let i = 256; i >= 8; i = i / 2){
//     console.log(i);
// }

// let num = 1;
// let answer
// for(let i = 1; i <= 5; i++){
//     answer = num*=i
// } 
// console.log(answer);

// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0  && i % 2 == 0){
//         console.log(i);
//     }
// }

// let a = 12;
// for(let i = 1; i <= 12; i++){
//     if(a % i == 0){
//         console.log(i)
//     }
// }

// for(let i = 1; i < 100; i++){
//     console.log(i)
//     if(i == 23){
//         break;
//     }
// }

// for(let i = 1; i < 11; i++){
//     if(i == 3 ||i == 5 || i == 7){
//         continue;
//     }
//     console.log(i);
// }
//--------------------------------------------
//FIBONACCI
// let n = 5

// if (n===1) {
//     console.log(0);
// }
// if (n >=2 ) {
//     console.log(0);
//     console.log(1);
// }
// let num1 = 0
// let num2 = 1
// let temp
// for(let i = 0   ; i < n-2; i++){
//     temp = num1 + num2
//     num1 = num2
//     num2=temp
//     console.log(num2);
// }


//0 1 1 2 3 5 8 13


// let x = 576;
// let x1 = parseInt((x / 100) % 10);
// let x2 = parseInt((x / 10) % 10);
// let x3 = x % 10;
// console.log(x1, x2, x3);

// let katet1 = 3;
// let katet2 = 4;
// let hip = 5;
// let sumOfkatet = Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2))
// if(hip == sumOfkatet){
//     console.log("Duzbucaqli ucbaqdir");
// }
// else{
//     console.log("deyil");
// }

// let a = 4;
// let b = 2;
// let c = 8;

// let eded1 = a*100 + b*10 + c;
// let eded2 = a*100 + c*10 + b;
// let eded3 = b*100 + a*10 + c;
// let eded4 = b*100 + c*10 + a;
// let eded5 = c*100 + a*10 + b;
// let eded6 = c*100 + b*10 + a;

// let max = Math.max(eded1, eded2, eded3, eded4, eded5, eded6);
// console.log(max);




// let firstNumber = 0;
// let secondNumber = 1;

// console.log(firstNumber);
// console.log(secondNumber);

// for (let i = 2; i < 5; i++) {
//   const nextNumber = firstNumber + secondNumber;
//   console.log(nextNumber);
//   firstNumber = secondNumber;
//   secondNumber = nextNumber;
// }

// let number = 100;

// let sum = 0;
// let hasil = 1;

// for(let i = 1; i <= number; i++){
//   sum += i;
//   hasil *= i;
//   console.log("Cem:", i, "-ci addim: ", sum, " ", "Hasil:", i, "-ci addim:", hasil);
// }
// console.log("Yekun Cem:", sum);
// console.log("Yekun Hasil:", hasil);

// let cem = 0
// for(let i = 1; i < 10; i++){
//   if(i % 2 == 0){
//     cem += i;
//   }
// }
// console.log(`Cut ededlerin cemi: ${cem}`);


// while (i < 10) {
//   console.log(i);
//   i++
// }
// let i = 1;
// do{
//   if(i % 2 != 0){
//     console.log(i);
//   }
//   i++;
// }while (i < 100)