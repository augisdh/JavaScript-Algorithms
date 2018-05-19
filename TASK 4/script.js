"use strict";

/*
Task 4.
Define a function that takes one integer argument and returns 
true/True or false/False depending on if the integer is a prime.
*/
console.log("TASK 4! Prime number or not?");

function isPrime(num) {
  if(num <= 1) return console.log("false");

  for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) return console.log("false");
  }
  return console.log("true");
}

isPrime(2);