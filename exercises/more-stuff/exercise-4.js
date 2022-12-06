/*
Exercise 
12.06.22

Given a list of numbers, write some code to find and display the largest numeric value in the list.


    List 	           Max
1, 6, 3, 2 	        6
-1, -6, -3, -2 	   -1
2, 2 	            2

*/

let list = [1, 3, 5, 999, 2, 6];
let maxNum = Math.max(...list);
console.log(maxNum);
