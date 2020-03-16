'use strict';

const numbers = process.argv.splice(2);

const result = numbers.reduce((previousValue, currentValue) => {
  return previousValue + parseInt(currentValue);
}, 0);

console.log(result);
