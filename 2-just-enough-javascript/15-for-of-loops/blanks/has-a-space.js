// #todo

'use strict';

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let hasASpace = false;

for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
    break;
  }
}

if (hasASpace) {
  alert('"' + input + '" has at least one space');
} else {
  alert('"' + input + '" does not have any spaces');
}
