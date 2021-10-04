'use strict';

let input = null;
// let input = 'year';
// let input = 'gummy bear';
// let input = 'coffee';
// let input = 'EAR';
// let input = '';

let message;
if (input === null) {
  message = 'you canceled';
} else if (input.includes('ear')) {
  message = 'eary!';
} else {
  message = 'not eary :(';
}

console.log(message);
