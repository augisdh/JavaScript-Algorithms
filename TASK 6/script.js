"use strict";

function areYouPlayingBanjo(name) {
  const nameArr = name.split('');
  return (nameArr[0].toLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('something'));