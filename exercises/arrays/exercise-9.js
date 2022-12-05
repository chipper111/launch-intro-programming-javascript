/*
Exercise 9
12.05.22

Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

*/

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// much more complex than needed
// function isThree(arr) {
//   return arr.some((num) => num === 3);
// }

//much simpler solution
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

console.log(isThree(numbers1));
console.log(isThree(numbers2));
console.log(isThree(numbers3));
