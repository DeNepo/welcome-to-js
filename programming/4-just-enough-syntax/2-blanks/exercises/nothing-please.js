'use strict';

// --- gather user input ---

let input = null;

while (input === null) {
  input = prompt('type nothing and click "enter"');

  console.log(message);
}

// --- create a message ---

let message = '';
if (input === '') {
  message = 'thank you for nothing!';
} else {
  message = 'this is not nothing: ' + input;
}
console.log(message);

// --- display message to the user ---

alert(message);
