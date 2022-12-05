/*
Exercise 7
12.05.22

Use reduce to compute the sum of the squares of all of the numbers in an array:

*/

function sumOfSquares(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + Math.pow(currentValue, 2),
    0
  );
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
