/*
Exercise 9
12.05.22

What does the following program log to the console? Why?

*/

let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a); // output => hi
// b/c objects are mutable by reference to their memory locations, you passed by reference here

console.log(qux); // output => hello
// strings are primitive which makes them immutable since you can't pass a reference and can only pass by value
