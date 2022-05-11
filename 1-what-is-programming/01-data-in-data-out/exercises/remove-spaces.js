'use strict';

/* Remove Spaces

This program takes for input text with spaces and after remove all spaces from text
  
  Data In:

all data

  Data Out:

input without spaces

  Test Cases:
Before: my name is
After: mynameis

Before: 123 456
After: 123456

Before: 12.6 12.7 78.9
After: 12.612.778.9

Beofre: Nazgul Maniiasova
After: NazgulManiiasova

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no strings --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
