'use strict';

/* there are 3 extra lines in this exercise */
/* parsons-collapse: hint

  your loop's condition should have no logic in it

*/

while (true) {
  let userInput = prompt('enter something to leave this loop');

  if (userInput !== null && userInput !== '') {
    break;
  }
}

alert('done!')


// begin distractors

while (false) { // distractor
while (userInput !== null && userInput !== '') { // distractor
continue; // distractor


// #todo