"use strict"

// let arr2 = [2, 9, -5, -4, 12, 182, -4];
// console.log(...arr2);
// for(let key of arr2){
//     if(key > 0){
//         console.log(key);
//     }
// }
// for(let key of arr2){
//     if(key < 0){
//         console.log(key);
//     }
// }
// for(let key of arr2){
//     if(key > 0 && key % 2 === 0){
//         console.log(key);
//     }
// }
// for(let key of arr2){
//     if(key < 0 && key % 2 !== 0){
//         console.log(key);
//     }
// }
// let sum = 0;
// let sumMusbet = 0;
// let sumMusbetCut = 0;
// for(let key of arr2){
//     sum += key;
// }
// for(let key of arr2){
//     if(key > 0){
//         sumMusbet += key;
//     }
// }
// for(let key of arr2){
//     if(key > 0 && key % 2 === 0){
//         sumMusbetCut += key;
//     }
// }
// console.log(sum);
// console.log(sumMusbet);
// console.log(sumMusbetCut);
// console.log(arr2);

// let arr3 = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// for(let key of arr3){
//     if(typeof key=="number"){
//         console.log(key);
//     }
// }
// for(let key of arr3){
//     if(typeof key=="string"){
//         console.log(key);
//     }
// }
// for(let key of arr3){
//     if(key > 0 && typeof key == "number"){
//         console.log(key);
//     }
// }
// for(let key of arr3){
//     if(typeof key=="string"){
//         console.log(key.length);
//     }
// }

// for(let key of arr3){
//     if(typeof key == "string" && key == key.toUpperCase()){
//         console.log(key);
//     }
// }

// const obj = {
//     name: "un",
//     price: 12,
//     stock: 100
// };
// console.log(obj);
// for(let key in obj){
//     console.log(obj[key]);
// }


// for(let i = 0; i < 3; i++){
//     let myInput = prompt("deyer daxil edin");
//     let val = prompt("deyer daxil edin");
//     console.log(myInput);
//     obj[myInput] = val
// }

// obj.price = 32;
// console.log(obj);




const arr = [
    {
      id: 4,
      supplierId: 2,
      categoryId: 3,
      quantityPerUnit: "48 - 6 oz jars",
      unitPrice: 22,
      unitsInStock: 53,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: true,
      name: "Chef Anton's Cajun Seasoning",
      supplier: {},
      category: {
        id: 3,
        description: "Desserts candies and sweet breads",
        name: "Confections",
      },
    },
    {
      id: 5,
      supplierId: 2,
      categoryId: 2,
      quantityPerUnit: "36 boxes",
      unitPrice: 21.35,
      unitsInStock: 0,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: true,
      name: "Chef Anton's Gumbo Mix",
    },
    {
      id: 6,
      supplierId: 3,
      categoryId: 2,
      quantityPerUnit: "12 - 8 oz jars",
      unitPrice: 25,
      unitsInStock: 120,
      unitsOnOrder: 0,
      reorderLevel: 25,
      discontinued: false,
      name: "Grandma's Boysenberry Spread",
    },
    {
      id: 7,
      supplierId: 3,
      categoryId: 7,
      quantityPerUnit: "12 - 1 lb pkgs.",
      unitPrice: 30,
      unitsInStock: 15,
      unitsOnOrder: 0,
      reorderLevel: 10,
      discontinued: false,
      name: "Uncle Bob's Organic Dried Pears",
    },
    {
      id: 8,
      supplierId: 3,
      categoryId: 2,
      quantityPerUnit: "12 - 12 oz jars",
      unitPrice: 40,
      unitsInStock: 6,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: false,
      name: "Northwoods Cranberry Sauce",
    },
    {
      id: 9,
      supplierId: 4,
      categoryId: 6,
      quantityPerUnit: "18 - 500 g pkgs.",
      unitPrice: 97,
      unitsInStock: 29,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: true,
      name: "Mishi Kobe Niku",
    },
    {
      id: 10,
      supplierId: 4,
      categoryId: 8,
      quantityPerUnit: "12 - 200 ml jars",
      unitPrice: 31,
      unitsInStock: 31,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: false,
      name: "Ikura",
    },
    {
      id: 2,
      supplierId: 1,
      categoryId: 1,
      quantityPerUnit: "24 - 12 oz bottles",
      unitPrice: 19,
      unitsInStock: 17,
      unitsOnOrder: 40,
      reorderLevel: 25,
      discontinued: false,
      name: "Chang",
    },
    {
      id: 3,
      supplierId: 1,
      categoryId: 2,
      quantityPerUnit: "12 - 550 ml bottles",
      unitPrice: 10,
      unitsInStock: 13,
      unitsOnOrder: 70,
      reorderLevel: 25,
      discontinued: false,
      name: "Aniseed Syrup",
    },
    {
      id: 11,
      supplierId: 5,
      categoryId: 2,
      quantityPerUnit: "1 kg pkg.",
      unitPrice: 21,
      unitsInStock: 22,
      unitsOnOrder: 30,
      reorderLevel: 30,
      discontinued: false,
      name: "Queso Cabrales 2",
      supplier: {
        id: 5,
        companyName: "Cooperativa de Quesos 'Las Cabras'",
        contactName: "Antonio del Valle Saavedra",
        contactTitle: "Export Administrator",
        address: {
          street: "Calle del Rosal 4",
          city: "Oviedo",
          region: "Asturias",
          postalCode: 33007,
          country: "Spain",
          phone: "(98) 598 76 54",
        },
      },
      category: {
        id: 4,
        description: "Cheeses",
        name: "Dairy Products",
      },
    },
    {
      id: 12,
      supplierId: 5,
      categoryId: 4,
      quantityPerUnit: "10 - 500 g pkgs.",
      unitPrice: 38,
      unitsInStock: 86,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: false,
      name: "Queso Manchego La Pastora",
    },
    {
      id: 13,
      supplierId: 6,
      categoryId: 8,
      quantityPerUnit: "2 kg box",
      unitPrice: 6,
      unitsInStock: 24,
      unitsOnOrder: 0,
      reorderLevel: 5,
      discontinued: false,
      name: "Konbu",
    },
    {
      id: 14,
      supplierId: 6,
      categoryId: 7,
      quantityPerUnit: "40 - 100 g pkgs.",
      unitPrice: 23.25,
      unitsInStock: 35,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: false,
      name: "Tofu",
    },
    {
      id: 15,
      supplierId: 6,
      categoryId: 2,
      quantityPerUnit: "24 - 250 ml bottles",
      unitPrice: 15.5,
      unitsInStock: 39,
      unitsOnOrder: 0,
      reorderLevel: 5,
      discontinued: false,
      name: "Genen Shouyu",
    },
  ];
// console.log(arr[0]);
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].unitPrice);
    // if (arr[i].unitPrice > 20) {
    //     console.log(arr[i].unitPrice);
    // }
// }
// let max = arr[0].unitPrice;
// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i].unitPrice){
//         max = arr[i].unitPrice;
//     }
// }
// console.log("Max:", max);

// let arrInput = prompt();
// for(let i = 0; i < arr.length; i++){
//     if(arrInput.toLocaleLowerCase() === arr[i].name[0] || arrInput.toLocaleUpperCase() === arr[i].name[0]){
//         console.log(arr[i].name);
//     }
// }

// for(let i = 0; i < arr.length; i++){
//     if(arrInput.toLocaleLowerCase() === arr[i].name.toLocaleLowerCase()){
//         console.log(arr[i].name);
//     }
// }

const array = [3, 2234, 2, 5, 5, -5, 33, 1, 42, 41];
let max = 0;
let min = 0;
for(let i = 0; i < array.length; i++){
    if(max < array[i]){
        max = array[i];
    }
    if(min > array[i]){
        min = array[i];
    }
    for(let j = i + 1; j < array.length; j++){

    }
}
array.sort();
console.log(array);
console.log(max);
console.log(min);

