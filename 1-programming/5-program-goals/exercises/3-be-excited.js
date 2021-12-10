'use strict';

/* Be Excited

  This program turns everything into an exclamation.

  Data In:
    any string

  Data Out:
    the input with a exclamation point at the end
    if the input already has a exclamation at the end
      nothing is changed

*/

/* ---    --- */

let input = null;
while (input === null) {
  input = prompt('enter something, it will become curious');
  console.log(input);
}

/* ---    --- */

// declare `output` and initialize it to `input`
__;
if (input[input.length - 1] !== '!') {
  // add a question mark to the end of `output`
  //  hint: remember the tracing exercises?
  //        they used string concatenation!
  __;
}
console.log(output);

/* ---    --- */

alert(output);
