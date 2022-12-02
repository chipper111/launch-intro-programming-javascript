/*
Exercise 5
12.02.22

Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

What does this program log to the console? Why?
*/

let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);

/* Answer =>
We get an output of "bar" since that particular foo variable is globally scoped unlike the foo with "qux". However, since console.log only has access to the globally scoped foo, the code doesn't get a chance to produce an error since we are not allowed to redeclare a variable with the same name. 
*/
