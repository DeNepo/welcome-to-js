'use strict';

/* 🥚 Breakpoints

  use the [debug] button to pause this program in the devtools

  click on a line number to create a breakpoint
    you can create as many as you want
  you can now use the big blue triangle button -->
    this button will skip ahead to the next breakpoint

  practice setting breakpoints for:
    - each time the while loop checks is evaluated
    - each time `double` is reassigned

*/

let text = null;
// here
while (text === null) {
  text = prompt('enter some characters to double');
}

let doubled = '';
for (let nextChar of text) {
  // here
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);
