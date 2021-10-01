// #todo

'use strict';

let input = '';
let prompting = true;
while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input.length > 4) {
    prompting = false;
  }
}
alert(input);
