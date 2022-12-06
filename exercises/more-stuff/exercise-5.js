/*
Exercise 
12.06.22

What does the following function do?

*/

function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

// split() => turns it into an array delimited by a single space
// reverse() => sorts the array in descending order lexically
// map() then creates an array unsorted based on the length of the individual strings in the array
