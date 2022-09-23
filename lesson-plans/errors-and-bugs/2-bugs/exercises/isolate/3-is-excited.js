'use strict';

/*
  test cases:
    '' -> '"" is not excited'
    'hello' -> '"hello" is not excited'
    '!' -> '"!" is excited'
    '!yo' -> '"!yo"" is excited'
    '!yo!' -> '"!yo!" is excited'

  experiment 1
    line:
    why:
    trying:

*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let isExcited = false;
for (const char of input) {
  if (char !== '!') {
    isExcited = true;
    break;
  }
}

if (isExcited) {
  alert('"' + input + '" is excited');
} else {
  alert('"' + input + '" is not excited');
}
