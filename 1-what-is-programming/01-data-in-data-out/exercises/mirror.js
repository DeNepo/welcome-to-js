'use strict';

/* Mirror

This program showa all input string as mirrors

  Data In:
any string

  Data Out:
Mirrored text | input text

  Test Cases:
ekuura | aruuke

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
