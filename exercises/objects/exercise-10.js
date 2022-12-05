/*
Exercise 10
12.05.22

How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

*/

[1, 2, ["a", ["b", false]], null, {}].forEach((element) =>
  console.log(typeof element)
);
