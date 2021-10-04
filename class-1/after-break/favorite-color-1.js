'use strict';

let message = '';

while (message === '') {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length !== 0) {
    message = 'your favorite color is: ' + input;
  }
}

alert(message);
