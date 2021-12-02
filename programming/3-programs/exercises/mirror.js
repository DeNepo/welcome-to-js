'use strict';

/* Mirror

  This program produces a mirror-image of the user's input.

  Data In:
    any string

  Data Out:
    the input on the right of a mirror (|)
    and a mirror image on the left

*/

// --- gather user input ---

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

// --- create mirrored text ---

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

// --- display mirrored text to the user ---

alert(mirrored);
