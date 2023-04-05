// let a = prompt("a=")*1;
// let b = prompt("b=")*1;

// const result = () => {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
// }
// result();

// eded1 = prompt("birinci eded:")*1;
// eded2 = prompt("ikinci eded:")*1;
// eded1 > eded2 ? console.log("eded1 boyukdur") : console.log("eded2 boyukdur")

// x = prompt("x=")*1;
// if(x === 0){
//     console.log("eded ne tek ne de cutdur")
// }
// else if(x % 2 === 0){
//     console.log("eded cutdur");
// }
// else {
//     console.log("eded tekdir");
// }

// let userName = "Cahangir";
// let password = 2002;

// let user_name = prompt("User name:");
// let user_password = prompt("Password:")*1

// if(userName === user_name && password === user_password){
//     console.log("Welcome")
// }
// else if(userName !== user_name && password === user_password){
//     console.log("User name is wrong!");
// }
// else if(userName === user_name && password !== user_password){
//     console.log("Password is wrong!");
// }

num1 = +prompt(); //5
num2 = +prompt(); //2
num3 = +prompt(); //9
//5 4 8
// 1 2 3
// 3 2 1
//  1 3 2
// 3 1 2
// 2 3 1
// 2 1 3
// if (eded1 > eded2 && eded2 > eded3) {
//   console.log("ilk");
//   console.log(eded1, eded2, eded3);
// } else if (eded1 > eded2 && eded3 > eded2) {
//   console.log("sad");
//   console.log(eded3,eded1, eded2);
// } else if (eded2 > eded3 && eded1 > eded3) {
//   console.log(eded2, eded1, eded3);
// } else if (eded2 > eded3 && eded1 < eded3) {
//   console.log("dfasdd");
//   console.log(eded2, eded3, eded1);
// } else if (eded3 > eded1 && eded1 > eded2) {
//   console.log(eded3, eded1, eded2);
// } else if (eded3 > eded1 && eded1 < eded2) {
//   console.log(eded3, eded2, eded1);
// } else {
//   console.log("hesaplanmadi");
// }

// 5
// 2
// 9
 
if (num1 > num2 && num1>num3 && num2 > num3) {
    console.log(num1,num2,num3);
}
else if(num1 > num2 && num1>num3 && num3 > num2){
    console.log(num1,num3,num2);
}
else if(num2 > num1 && num2>num3 && num1 > num3){
    console.log(num2,num1,num3);
}
else if(num2 > num1 && num2>num3 && num1 < num3){
    console.log(num2,num3,num1);
}
else if(num3 > num1 && num3>num2 && num2 > num1){
    console.log(num3,num2,num1);
}
else if(num3 > num1 && num3>num2 && num1 > num2){
    console.log(num3,num1,num2);
}
else{
    console.log("not");
}