'use strict';

/*
  the user can enter their favorite word and be told if it is long or short.
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is 7 characters or longer:
        they are told it is a long word
    - given their input is shorter than 7 characters:
        they are told it is a short word


  test cases:
    long words:
      'abcdefg' -> '"abcdefg" is a long word'
      'computer' -> '"computer" is a long word'
      'cybersecurity' -> '"cybersecurity" is a long word'
    short words:
      'abcdef' -> '"abcdef" is a short word'
      'jello' -> '"jello" is a short word'
      'hi' -> '"hi" is a short word'
*/

/* --- gather user input --- */

let input = '';

let isValid = false;
while (!isValid) {
  input = prompt('enter a word');
  // Data In:     null or a string
  console.log(input);

  if (input === null) {
    /* --- repeat if the input is null (sub-goal!) --- */
    alert('no canceling!');
  } else if (input === '') {
    /* --- repeat if the input is an empty string (sub-goal!) --- */
    alert('empty input is not allowed');
  } else {
    /* --- exit if neither condition is true (sub-goal!) --- */
    isValid = true;
  }
}

// Data After:  a non-empty string
console.log(input);

/* --- create the final message --- */

// Data Before: a non-empty string
let message = '"' + input + '"';
if (input.length >= 7) {
  message = message + ' is a long word';
} else {
  message = message + ' is a short word';
}
// Data After:  a message describing the string as long or short
console.log(message);

/* --- display the message for the user --- */

// Data Out:    a message describing the string as long or short
