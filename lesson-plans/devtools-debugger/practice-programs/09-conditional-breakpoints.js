'use strict';

/* 🐥 Conditional Breakpoints

  create breakpoints that only stop if a condition is true
  anything you can write in a conditional or while check
    you can also write in a conditional breakpoint

  after completing the commented challenges
    play around a bit with conditional breakpoints

*/

let input = null;

let invalid = true;
while (invalid) {
  input = prompt(
    'enter something with an "e" in it. \nthe "e"s will be removed',
  );
  // breakpoint: only when the user didn't cancel (input is not null)
  if (input.includes('e')) {
    invalid = false;
  }
}

let noMoreEs = '';
for (let char of input) {
  // breakpoint: only when the next character is "e"
  if (char !== 'e') {
    noMoreEs = noMoreEs + char;
  }
}

alert('all done!\n- ' + noMoreEs);
