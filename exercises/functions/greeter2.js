/*
Exercise 2
12.02.22


In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

*/

function getName(message) {
  let rlSync = require("readline-sync");

  //   let firstName = rlSync.question(`What is your first name?\n`);
  //   let lastName = rlSync.question(`What is your last name?\n`);
  let name = rlSync.question(message);
  return name;
}

let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
