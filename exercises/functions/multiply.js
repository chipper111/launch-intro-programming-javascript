/*
Exercise 4
12.02.22

Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566

*/

let mult = (num1, num2) => num1 * num2;
let getNum = function (message) {
  let rlSync = require("readline-sync");
  let num = Number(rlSync.question(message));
  return num;
};
let num1 = getNum("Enter the first number: ");
let num2 = getNum("Enter the second number: ");

console.log(`${num1} * ${num2} = ${mult(num1, num2)}`);
