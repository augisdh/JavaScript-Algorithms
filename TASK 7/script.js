"use strict";

function automorphic(n){
  const numberLength = n.toString().split('').length;
  const numberSqrLastDig = Number(Math.pow(n, 2).toString().slice(-numberLength));
  return (n === numberSqrLastDig) ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(6));