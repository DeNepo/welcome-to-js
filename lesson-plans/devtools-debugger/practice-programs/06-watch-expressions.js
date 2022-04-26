'use strict';

/* 🐣 Watch Expressions

  practice tracking the value of any expression at each step of the program

  1. open the Watch panel in your debugger -->
  2. click on the + sign in the Watch panel to add these expressions:
      input === null
      input.length > 5
      input.length < 5
  3. step through the program with different input values
      do the watch expressions help you predict what will happen next?

*/

let input = '';

let isFiveLong = false;
while (!isFiveLong) {
  input = prompt('enter something with 5 characters');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length > 5) {
    alert('too long');
  } else if (input.length < 5) {
    alert('too short');
  } else {
    isFiveLong = true;
  }
}

let message = 'finally! something with 5 characters: \n- ' + input;
alert(message);
