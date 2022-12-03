/*
Exercise 7
12.03.22

Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

*/

function strToCaps(str) {
  if (typeof str !== "string") {
    console.log(`Error Message: not type of string`);
    return;
  }

  //   if (str.length > 10) {
  //     return str.toUpperCase();
  //   } else {
  //     return str;
  //   }

  return str.length > 10 ? str.toUpperCase() : str;
}

console.log(strToCaps("hello world"));
console.log(strToCaps("goodbye"));
