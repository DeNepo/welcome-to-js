'use strict';

/* Be Excited

  This program turns everything into an exclamation.

  Data In:
    any string

  Data Out:
    the input with a exclamation point at the end
    if the input already has a exclamation at the end
      nothing is changed

  Test Cases:

*/

/* ---  ___  --- */

let input = null;
// WHILE: input === null
//   input <- prompt('enter something, it will become excited')
// :END WHILE
console.log(input);

/* ---  ___  --- */

let output = input;
// IF: input[input.length - 1] !== '!'
//   output <- output + '!'
// :END IF
console.log(output);

/* ---  ___  --- */

alert(output);
