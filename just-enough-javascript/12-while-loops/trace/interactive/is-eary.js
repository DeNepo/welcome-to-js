// #todo

'use strict';

let message = '';

let isEary = false;
while (!isEary) {
  let input = prompt('enter something that includes "ear"');

  if (input === null) {
    alert('there is no escape');
  } else if (input.includes('ear')) {
    message = '"' + input + '" includes "ear"';
    isEary = true;
  }
}

alert(message);
