"use strict";

/*
Task 1.
Create a function that iterates form 1 up to 100,
while outputing "FIZZ" at mulpiples of 3.
"BUZZ" at multiples of 5.
and "FIZZBUZZ" at multiples of 3 and 5.
*/
console.log("TASK 1!");
function printNames(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FIZZBUZZ");
        } else if(i % 3 === 0){
            console.log("FIZZ");
        } else if(i % 5 === 0){
            console.log("BUZZ");
        } else {
            console.log(i);
        }
    }
}

printNames();