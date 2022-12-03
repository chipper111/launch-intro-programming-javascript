/*
Exercise 3
12.03.22

Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

*/

function evenOrOdd(num) {
  // check to see if num is int
  if (!Number.isInteger(num)) {
    console.log(`Error Message: not an integer!`);
    return;
  }

  // num is int
  if (num % 2 === 0) {
    console.log(`even`);
  } else {
    console.log(`odd`);
  }
}

evenOrOdd(52);
evenOrOdd(1);
evenOrOdd(0);
evenOrOdd(2.465);
