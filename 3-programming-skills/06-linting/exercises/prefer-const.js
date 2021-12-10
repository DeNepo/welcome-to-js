// #todo

'use strict';

/* https://eslint.org/docs/rules/prefer-const

  always use `const` for variables that are not reassigned

*/

let input = null;
while (input === null) {
  input = prompt('enter something');
}

let reversed = '';
for (let char of input) {
  reversed = char + reversed;
}

let message = input + ' -> ' + reversed;

alert(message);
