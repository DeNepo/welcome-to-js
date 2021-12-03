'use strict';

/* Reverse

  This program reverses the user's input.

  Data In:
    any string

  Data Out:
    the input string, reversed

*/

// --- gather user input ---

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

// --- reverse the input text ---

/* declare a variable named reversed
  keyword: let
  name: reversed
  initialized: ''
*/

_;
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

// --- create a final message ---

let message = input + ' -> ' + reversed;
console.log(message);

// --- display message to the user ---

alert(message);
