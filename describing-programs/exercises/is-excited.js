// #todo

'use strict';

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let isExcited = false;
for (let char of input) {
  if (char === '!') {
    isExcited = true;
    break;
  }
}

if (isExcited) {
  alert('"' + input + '" is excited');
} else {
  alert('"' + input + '" is not excited');
}
