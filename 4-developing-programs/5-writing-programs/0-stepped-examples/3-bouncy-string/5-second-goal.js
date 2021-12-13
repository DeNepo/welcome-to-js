'use strict';

/*
  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> 'jElLo'
*/

/* --- gather input from the user --- */

let input = null;
while (true) {
  //  Data In:    null or a string
  input = prompt('enter some text with only letters');
  console.log(input);

  /* --- repeat if the input is null (sub-goal!) --- */
  if (input === null) {
    alert('no canceling');
    continue;
  }

  /* --- repeat if the input is empty (sub-goal!) --- */
  if (input === '') {
    alert('no empty input');
    continue;
  }

  /* --- repeat if the input is only letters (sub-goal!) --- */
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let invalidInput = false;
  for (let char of input) {
    if (!letters.includes(char)) {
      invalidInput = true;
    }
  }

  if (invalidInput) {
    alert('your input contains non-letters');
    continue;
  }

  /* --- exit if the input passed the previous checks (sub-goal!) --- */
  break;
}
//  Data After: a non-empty string with only letters
console.log(input);

/* --- bouncify the string --- */

//  Data Before:  a string with only letters, upper or lower case
let bouncy = '';

let isBigLetter = false;
for (let letter of input) {
  if (isBigLetter) {
    bouncy = bouncy + letter.toUpperCase();
  } else {
    bouncy = bouncy + letter.toLowerCase();
  }
  isBigLetter = !isBigLetter;
}
//  Data After:   the same letters with every other uppercase
console.log(bouncy);

/* --- display the bouncy string --- */

// Data Out:      a bouncy string
