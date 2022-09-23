'use strict';

/*
  test cases:
    null -> 'you canceled'
    'abcde' -> 'abcde'
    'javascript' -> 'javascript'
    'you canceled' -> 'you canceled'

  experiment 1
    line:
    why:
    trying:

*/

let input = '';

let prompting = true;
while (prompting) {
  let input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input > 4) {
    prompting = false;
  }
}

alert(input);
