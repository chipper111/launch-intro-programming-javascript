/*
Exercise 3
12.02.22

What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);
*/

{
  let foo = "bar";
}

console.log(foo);

/*
Foo is not defined since foo is block scoped while console.log only has access to globally scoped variables. 
