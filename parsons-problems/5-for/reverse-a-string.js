/* this exercise has 4 distracting lines */

/*
  create a loop that will log the letters in reverse order
*/


let before = 'toadstools';
let after = '';

for (let i = before.length - 1; i >= 0; i = i - 1) {
  let nextLetter = before[i];
  after = after + nextLetter;
}

// begin distractors

let nextLetter = before.i; // distractor

for (let i = before.length; i === 0; i = i - 1) { // distractor
for (let i = before.length - 1; i !== 0; i = i + 1) { // distractor
for (let i = before - 1; i !== 0; i = i - 1) { // distractor
