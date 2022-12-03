/*
Exercise 1
12.02.22

What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
/* Answer => 
    Since when bar = 2, bar is in the scope of the function only and console.log only has access to the global bar variable. 
*/
