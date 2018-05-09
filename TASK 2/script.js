"use strict";

/*
Task 2.
Create a function that reverses string letters.
If word is 5 letters long or longer reverse letters.
*/
console.log("TASK 2!");
function reverseWords(string){
    const array = string.split(" ");
    let text = "";
    
    for(let i = 0; i < array.length; i++){
      const word = array[i];
      if(word.length >= 5){
        text += word.split("").reverse().join("").toString() + " ";
      } else {
        text += array[i] + " ";
      }
    }
    return text.slice(0, text.length-1);
}

console.log(reverseWords("My name is JavaScript Function"));
