"use strict";
// // let fname = 'test';
// // fname = 'lucas';
// // console.log(fname);
// // let lname : string;
// // lname = "Lucas"
// // const newName = lname.toUpperCase();
// // console.log(newName)
// let age: number;
// age = 32
// let bob = "23";
// let result = parseInt(bob)
// console.log(age)
// console.log('result -> ', result);
// let valid : boolean = false
// console.log(valid)
let numList;
numList = [1, 2, 3, 4, 5];
let result = numList.filter((num) => num > 2);
let sumAll = numList.reduce((acc, sum) => acc + sum);
console.log(result);
console.log('Soma de todos os valores ', sumAll);
