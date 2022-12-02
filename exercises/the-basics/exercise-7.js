/*
Exercise 7
12.01.22

Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
*/
let foo = ["a", "b", "c"];
console.log(foo.length); // => 3
console.log(foo[3]); // will this result in an error?

/*
Answer:

You will get a return value of undefined but no error. Since arrays start at 0, the index of 3 will cause you to be out of bounds. In most programming languages, you'll get an out of bounds error but JavaScript will only return undefined since that place in memory is undefined.
*/
