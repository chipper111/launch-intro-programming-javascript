/*
Exercise 
12.06.22

This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

*/

// my much more complicated solution which doesn't actually answer the question asked
/*
function isNotANumber(num) {
  let str = String(num);
  for (let ch of str) {
    // if ch between ASCII codes for 0 & 9
    if (!(ch.charCodeAt(0) >= 48) || !(ch.charCodeAt(0) <= 57)) {
      return false;
    }
  }
  return true;
}
*/

// launch simple elegant solution
function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(5));
console.log(isNotANumber("Hello World!"));
console.log(isNotANumber(null));
console.log(isNotANumber(NaN));
