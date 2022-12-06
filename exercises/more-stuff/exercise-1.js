/*
Exercise 1
12.06.22

What does this code log to the console? Why?

*/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]
// b/c we only mutated the array1 so array1 still points to the same memory location as array 2
