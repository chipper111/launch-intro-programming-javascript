/*
Exercise 4
12.02.22



What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
*/

const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

/*
We get a type error since we are trying to reassign NAME which is immutable due to the const variable type.
*/
