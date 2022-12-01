/*
Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

    thousands place is 4
    hundreds place is 9
    tens place is 3
    ones place is 6
*/

const origNum = 4936;
let num = 4936;

// const thousandsPlace = parseInt(num / 1000);
// const hundredsPlace = parseInt((num % 1000) / 100);
// const tensPlace = parseInt((num % 100) / 10);
// const onesPlace = parseInt(num % 10);

const onesPlace = num % 10;

num = (num - onesPlace) / 10;
const tensPlace = num % 10;

num = (num - tensPlace) / 10;
const hundredsPlace = num % 10;

num = (num - hundredsPlace) / 10;
const thousandsPlace = num;

console.log(`The thousands place of ${origNum} is ${thousandsPlace}.`);
console.log(`The hundreds place of ${origNum} is ${hundredsPlace}.`);
console.log(`The tens place of ${origNum} is ${tensPlace}.`);
console.log(`The ones place of ${origNum} is ${onesPlace}.`);
