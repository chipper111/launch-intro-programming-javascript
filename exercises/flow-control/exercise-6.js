/*
Exercise 6
12.03.22

What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);

/* Solution => 

  Original Answer was wrong => 
  The output will be empty b/c you are passing a falsey (undefined array) so the conditional statement will evaluate to false which hereby activates the else clause.

  Solution on Launch => 
  The output is Not Empty since, while the array is empty -- it has no elements and the length property is 0 -- it isn't falsy. Thus, JavaScript executes the first branch of the if statement.
  */
