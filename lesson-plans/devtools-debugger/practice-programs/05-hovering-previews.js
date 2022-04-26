'use strict';

/* 🥚 Hovering Previews

  practice previewing expressions at different steps of execution
  - variables: hover without highlighting
  - expressions: highlight and hover

  pause this program each time it reaches the `while` check (breakpoint!):
  - highlighting one portion of the `while` check expression
  - hover your mouse over it to see the value
  - check the scopes panel to understand how the value was calculated

*/

let input = '';
// try previewing these selections of the `while` check expression:
//     |---|
//     |------------|
//                       |---|
//                       |-----------|
//                       |----------------|
//     |----------------------------------|
while (input === null || input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}

let message =
  'finally! something that is longer than 4 characters: \n- ' + input;
alert(message);
