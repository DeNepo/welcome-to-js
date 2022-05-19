'use strict';

/* Has an "x"

  This programs checks if the user's input has an "x" in it.

  Data In:
    any string

  Data Out:
    a message saying if the input had an "x" or not

  Test Cases:

*/

/* ---  ___  --- */

let input = null;
// WHILE: input === null
while (input === null) {
  // input <- prompt('enter something, the program will check if it has an "x"')
  input = prompt('enter something, the program will check if it has an "x"');
  // :END WHILE
}
console.log(input);

/* ---  ___  --- */

let message = '"' + input + '" ';
// IF: input.includes('x')
//  message <- message + 'has at least one "x"'
// ELSE:
//  message <- message + 'does not have a single "x"'
// :END IF
console.log(message);

/* ---  ___  --- */

alert(message);
