/**
 *
 * Functions in TS
 */

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(12, 2));

// Optional Parameters

function multiply(num1: number, num2: number, num3?: number) {
  return num3 ? num1 * num2 * num3 : num1 * num2;
}

console.log("Multiply result ", multiply(2, 3));

// Default Parameters

const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;
console.log("Subtratction result => ", sub(100, 50, 20));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 5, 19, 22, 34]);

let concatString = getItems<string>(['v', 'e', 'g', 'a', 'n'])

console.log(concatResult);

console.log(concatString)
