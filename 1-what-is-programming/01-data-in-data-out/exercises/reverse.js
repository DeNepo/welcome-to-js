'use strict';

/* Reverse
This progrma reverse input all data 
  Data In:

all variables

  Data Out:
reversed input

  Test Cases:
na -> an
nazgul -> lugzan

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
