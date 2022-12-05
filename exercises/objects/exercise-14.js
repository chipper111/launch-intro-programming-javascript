/*
Exercise 14
12.05.22

Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

*/

function hello(greeting, name) {
  return greeting + " " + name;
}
// ojects: hello
// variables: greeting, name, hello
// primitives: greeting, name

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}
// objects: xyzzy, return {} & d value of {}, [3,4,5]
// object proprety names: a, b, c, d, {}
// primitive values: 1,2,3,4,5

const howdy = hello("Hi", "Grace");
let foo = xyzzy();
// objects: howdy, hello, foo, xyzzy
// variables: howdy, foo
// primitive values: "Hi", "Grace"
