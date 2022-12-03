/*
Exercise 4
12.03.22

Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

*/

for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

// the output will be 1,2,3,4,5 since when i = 0, it gets incremented right before it gets logged to the output
