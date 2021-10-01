// #todo

'use strict';

let number = -2;
// let number = -1;
// let number = 0;
// let number = 1;
// let number = 2;

let message = 'your number is ';
if (number >= 0) {
  let relation;
  if (number === 0) {
    relation = 'exactly ';
  } else {
    relation = 'greater than ';
  }
  message = message + relation + 'zero';
} else {
  message = message + 'negative';
}

console.log(message);
