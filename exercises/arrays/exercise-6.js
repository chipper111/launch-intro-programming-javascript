/*
Exercise 6
12.05.22

Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

*/

function oddLengths(arr) {
  arr = arr.filter((element) => element.length % 2 !== 0);
  return arr.map((element) => element.length);
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
