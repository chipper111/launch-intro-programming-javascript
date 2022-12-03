/*
Exercise 3
12.03.22

The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
*/

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// It will be an infinte loop b/c in the while loop line, we are reassigning counter to 1 after every iteration, so the counter never gets to 2
