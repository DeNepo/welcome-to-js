'use strict';

/* Has an "x"

  This programs checks if the user's input has an "x" in it.

  Data In:
    any string

  Data Out:
    a message saying if the input had an "x" or not

*/

/* ---    --- */

let input = null;
while (input === null) {
  input = prompt('enter something, the program will check if it has an "x"');
  console.log(input);
}

/* ---    --- */

let message = '"' + input + '"';
if (input.includes('x')) {
  // add this text to the end of the message:
  //  ' has at least one "x"'
  __;
} else {
  // add this text to the end of the message:
  //  ' does not have a single "x"'
  __;
}
console.log(message);

/* ---    --- */

alert(message);
