/*
 Exercise 1
 12.03.22

 Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.


*/

let rlSync = require("readline-sync");
let age = Number(rlSync.question(`How old are you?\n`));

// const tenYears = 10;
// const twentyYears = 20;
// const thirtyYears = 30;
// const fortyYears = 40;

console.log(`You are ${age} years old.`);

for (let i = 1; i < 5; i++) {
  console.log(`In ${i * 10} years, your will ${i * 10 + age} years old.`);
}
