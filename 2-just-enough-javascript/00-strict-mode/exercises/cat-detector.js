// #todo

// 'use strict'; // what happens if you uncomment this line?

/*
  The Cat Detector

  This programs prompts the user to input a cat.
  Then it checks if they did input a cat.
  Finally it lets the user know their input was a cat.
*/

/* --- gather the user's input (canceling not allowed) --- */

input = null;
while (input === null) {
  input = prompt('please enter "cat"');
  console.log('user input:', input);
}

/* --- check the input and create a message --- */

message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
  console.log('path: if');
} else {
  message = 'thank you for the cat';
  console.log('path: else');
}
console.log('final message:', message);

/* --- display the message for the user --- */

alert(message);
