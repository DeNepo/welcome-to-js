'use strict';

/* Flip Five

This program reverse text (input) if its only 5 characters long, and program cannot end with correct enter.
  Data In:
Any string and numbers

  Data Out:
Reversed text and numbers if its true

  Test Cases:

akzan, Yes, nazka is 5 characters long

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = ' Yes, ' + input + ' is 5 characters long';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
