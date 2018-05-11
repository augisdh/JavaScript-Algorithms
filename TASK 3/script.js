"use strict";

/*
Task 3.
Create a function that returns: a string formatted as a list of names separated by commas
except for the last two names, which should be separated by an ampersand.
Example:
    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''
*/
console.log("TASK 3!");
function formatList(list){
    if(list.length >= 2){
        let str =  list.map(item => item.name).join(", ");
        return str.substring(0, str.lastIndexOf(",")) + " &" + str.substring(str.lastIndexOf(",") + 1);
    } else if(list.length === 1){
        return list.map(item => item.name).toString();
    } else {
        return '';
    }
}

console.log(formatList([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}]));