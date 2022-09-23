'use strict';

/*
  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line:
    why:
    trying:

*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null && input.length === 0) {
    message = input + '"';
    break;
  }
}

alert(message);
