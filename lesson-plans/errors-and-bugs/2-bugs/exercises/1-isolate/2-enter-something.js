'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line:
    why:
    trying:

*/

let message = '';

let input = null;
while (input === null || input.length === 0) {
  const input = prompt('enter something');

  message = 'you entered "' + input + '"';
}

alert(message);
