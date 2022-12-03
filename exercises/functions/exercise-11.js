/*
Exercise 11 
12.02.22

Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

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

// global => multiply, getNumber, left, right, console, parseFloat, question

// local =>  left, right, product, prompt

// local left  & right =>  The function parameters left & right of multiply() are local b/c they only exist with in the scope of the function and immediately get destroyed after the function returns a value;

// global left & right => Left & right were declared globally and outside of any functions which hereby allow them to be globally scoped.
