/*
Exercise 5
12.03.22

Refactor this statement to use an if statement instead.

return foo() ? 'bar' : qux();

*/

return foo() ? "bar" : qux();

if (foo()) {
  return "bar";
} else {
  return qux();
}
