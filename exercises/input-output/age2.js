/*
 Exercise 2
 12.02.22

Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

How old are you? 22
You are 22 years old.
In 10 years, you will be 32 years old.
In 20 years, you will be 42 years old.
In 30 years, you will be 52 years old.
In 40 years, you will be 62 years old.


*/

let rlSync = require("readline-sync");
let age = Number(rlSync.question(`How old are you?\n`));

const tenYears = 10;
const twentyYears = 20;
const thirtyYears = 30;
const fortyYears = 40;

console.log(`You are ${age} years old.`);
console.log(`In ${tenYears} years, you will be ${age + tenYears} years old.`);
console.log(
  `In ${twentyYears} years, you will be ${age + twentyYears} years old.`
);
console.log(
  `In ${thirtyYears} years, you will be ${age + thirtyYears} years old.`
);
console.log(
  `In ${fortyYears} years, you will be ${age + fortyYears} years old.`
);
