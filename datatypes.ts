// let fname = 'test';
// fname = 'lucas';

// console.log(fname);

// let lname : string;
// lname = "Lucas"
// const newName = lname.toUpperCase();

// console.log(newName)

let age: number;
age = 32;

let bob = "23";

let result = parseInt(bob);
console.log(age);
console.log("result -> ", result);

let valid: boolean = false;
console.log(valid);

let numList: Array<number>;

numList = [1, 2, 3, 4, 5];

let sumAll = numList.reduce((acc, sum) => acc + sum);

console.log(result);

console.log("Soma de todos os valores ", sumAll);

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

console.log(c);

let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(10, 30);

swapNumbs[0];
swapNumbs[1];
console.log(swapNumbs[1]);

let department: string = "lucas";

console.log(department);
