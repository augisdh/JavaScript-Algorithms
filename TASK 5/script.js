"use strict";

function goodVsEvil(good, evil){
  let sumGood = 0;
  let sumEvil = 0;

  const goodVaulues = ["1", "2", "3", "3", "4", "10"];
  const evilValues = ["1", "2", "2", "2", "3", "5", "10"];

  const goodArray = good.split(" ");
  const evilArray = evil.split(" ");

  for(let i = 0; i < goodArray.length; i++){
    sumGood += Number(goodArray[i]) * Number(goodVaulues[i]);
  }

  for(let i = 0; i < evilArray.length; i++){
    sumEvil += Number(evilArray[i]) * Number(evilValues[i]);
  }

  if(sumGood > sumEvil){
    console.log("Battle Result: Good triumphs over Evil");
  } else if (sumGood === sumEvil){
    console.log("Battle Result: No victor on this battle field");
  } else {
    console.log("Battle Result: Evil eradicates all trace of Good");
  }
}

goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0');