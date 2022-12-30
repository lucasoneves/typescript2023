"use strict";
/**
 *
 * Functions in TS
 */
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(12, 2));
// Optional Parameters
function multiply(num1, num2, num3) {
    return num3 ? num1 * num2 * num3 : num1 * num2;
}
console.log("Multiply result ", multiply(2, 3));
// Default Parameters
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log("Subtratction result => ", sub(100, 50, 20));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 5, 19, 22, 34]);
let concatString = getItems(['v', 'e', 'g', 'a', 'n']);
console.log(concatResult);
console.log(concatString);
