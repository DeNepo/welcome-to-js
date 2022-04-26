'use strict';

/* 🐔 `debugger;`

  write 2 `debugger` statements in this program so it pauses:
  - just before the while loop
  - just before reassigning `isAnApple`

  use both the [run] and [debug] buttons
    how are these two buttons different?

  when paused in the devtools click the big blue triangle
    what does this button do?
    what does the `debugger` statement do?

*/

let isAnApple = false;
while (!isAnApple) {
  let input = prompt('please give me an apple');

  if (input !== null) {
    isAnApple = input.toLowerCase() === 'apple';
  }
}

alert('thank you for the apple!');

/* PS.
  the [debug] button in study lenses isn't magic
  it just writes a `debugger` at the top and bottom of your code
  you can do the same thing by hand then use the [run] button
*/
