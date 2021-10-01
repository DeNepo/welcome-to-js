// #todo

'use strict';

let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );

  if (input === null) {
    alert('no escape');
    continue;
  }
  if (input === '') {
    alert('gotta enter something');
    continue;
  }
  if (!input.includes(' ')) {
    alert('there must be a space!');
    continue;
  }

  break;
}

let spaceless = '';
for (let char of input) {
  if (char !== ' ') {
    spaceless = spaceless + char;
  }
}

alert(input + ' -> ' + spaceless);
