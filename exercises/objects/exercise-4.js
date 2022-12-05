/*
Exercise 4
12.05.22

Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

The order of the array does not matter.

*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.entries(obj);

arr = arr.map((entry) => [entry[0].toUpperCase(), entry[1]]);

console.log(arr);
