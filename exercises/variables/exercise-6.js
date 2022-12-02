/*
Exercise 6
12.02.22

Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
*/

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

/* Answer =>
We get an output of "bar" since that particular foo variable is globally scoped unlike the foo with "qux". However, since console.log only has access to the globally scoped foo, the code doesn't get a chance to produce an error since we are not allowed to redeclare a variable with the same name as in the variable foo that is block scoped.
*/
