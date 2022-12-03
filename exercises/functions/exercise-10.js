/*
Exercise 10 
12.02.22

Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.

*/

function multiply(left, right) {
  // variables: multiply, left, right, product
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  // variables: getNumber, prompt
  return parseFloat(question(prompt)); // variables: parseFloat
}

let left = getNumber("Enter the first number: "); // variables: left, right
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);
// variables: console (log is a property name not a variable)

// global => multiply, getNumber, left, right, console

// local =>  left, right, product, prompt
