/*
Exercise 8
 12.05.22

 This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

*/

function oddLengths(arr) {
  return arr.reduce((oddArr, str) => {
    if (str.length % 2 === 1) {
      oddArr.push(str.length);
    }
    return oddArr;
  }, []);
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
