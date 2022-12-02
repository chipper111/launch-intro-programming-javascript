/*
 Exercise 2
 12.02.22

 Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
*/

const age = 20;
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
