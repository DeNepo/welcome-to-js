// #todo

'use strict';

let word = 'racecar';
// let word = 'bike';
// let word = 'f';
// let word = ' i o u ';
// let word = 'done.';

let reversed = '';

let index = word.length - 1;
while (index >= 0) {
  reversed = reversed + word[index];
  index--;
}

console.log(word, reversed);
