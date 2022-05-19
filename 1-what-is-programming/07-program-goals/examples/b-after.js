'use strict';

/* Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    Any string

  Data Out:
    A string describing if the user's input was "cat" or not

  Test Cases:
    '' -> '"" is not a cat'
    'cat' -> 'thank you for the cat'
    'anything else' -> '"anything else" is not a cat'

*/

/* --- gather the user's input (canceling not allowed) --- */

// input <- null
let input = null;

// WHILE: input === null
while (input === null) {
  //   input <- prompt('please enter "cat"')
  input = prompt('please enter "cat"');
  // :END WHILE
}

/* --- check the input and create a message --- */

// message <- ''
let message = '';

// IF: input !== 'cat'
if (input !== 'cat') {
  //   message <- '"' + input + '" is not a cat'
  message = '"' + input + '" is not a cat';
  // ELSE:
} else {
  //   message <- 'thank you for the cat'
  message = 'thank you for the cat';
  // :END IF
}

/* --- display the message for the user --- */

// alert(message)
alert(message);
