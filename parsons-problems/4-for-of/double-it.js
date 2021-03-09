/* this exercise has 4 distracting lines */

let string = '_-|-_';

let doubled = '';
for (let letter of string) {
  doubled = doubled + letter + letter;
}

console.log(doubled === '__--||--__');

// begin distractors

console.log(doubled === '_-|-__-|-_'); // distractor

for (let letter in string) { // distractor
