'use strict';

/* 🐣 Error State

  it's very helpful to know the program's state when an error occurs
  your Debugger will show you this if it's set to pause on exceptions

  run this program with different inputs to find the error
  when you find an error try finding what went wrong using:
  - the name of the error (under the skip & step buttons)
  - the highlighted source code
  - the values in the Scope pane

*/

let input = '';

let tooShort = true;
while (tooShort) {
  input = prompt('enter something longer than 4 characters');
  if (input.length > 4) {
    tooShort = false;
  }
}

alert('thank you for "' + input + '"!');
