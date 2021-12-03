'use strict';

/* Flip Five 1

  This program reverses anything with 5 characters

  Data In:
    strings of length 5

  Data Out:
    the reversed input

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt(
    'enter something longer than 5 characters and it will be reversed.',
  );
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
