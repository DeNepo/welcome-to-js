'use strict';

/* 🥚 Breakpoints

  use the [debug] button to pause this program in the devtools

  click on a line number to create a breakpoint
    you can create as many as you want
  you can now use the big blue triangle button -->
    this button will skip ahead to the next breakpoint

  practice setting breakpoints for:
    - each time the while loop checks is evaluated
    - each time `character` is declared
    - each time a character is checked for repeats
    - each time noRepeats is assigned a new value

*/

let phrase = null;
// here
while (phrase === null) {
  phrase = prompt('enter some text');
}

let noRepeats = '';
// hint: only for `character`, not `phrase`!
for (let character of phrase) {
  // here: only for `if`, not `includes`
  if (!noRepeats.includes(character)) {
    // here
    noRepeats = noRepeats + character;
  }
}

alert('"' + phrase + ' -> "' + noRepeats + '"');
