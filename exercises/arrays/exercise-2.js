/*
Exercise 2
12.03.22

Log all of the even values from myArray to the console.

*/

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach((value) => {
  if (value % 2 === 0) {
    console.log(value);
  }
});
