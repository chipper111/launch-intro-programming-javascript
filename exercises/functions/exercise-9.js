/*
Exercise 9
12.02.22

Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

*/

function multiply(left, right) {
  // variables: multiply, left, right, product
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  // variables: getNumber, prompt
  return parseFloat(question(prompt)); // variables: parseFloat, question
}

let left = getNumber("Enter the first number: "); // variables: left, right
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);
// variables: console (log is a property name not a variable)
