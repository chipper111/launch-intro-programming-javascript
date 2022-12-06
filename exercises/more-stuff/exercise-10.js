/*
Exercise 
12.06.22

Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Consider this code:

> let x = "5"
> x = x + 1
= "51"


Now, consider this code:

> let y = "5"
> y++

What gets returned by y++ in the second snippet, and why?

*/

let y = "5";
console.log(y++); // b/c console.log reads left to right so it ouputs y = 5 before the post increment operator increments the 5, if we wanted 6 then we would use the pre-increment operator of ++y

let next = y++;
console.log(next);
