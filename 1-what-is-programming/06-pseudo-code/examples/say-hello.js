'use strict';

// input <- null
let input = null;
// WHILE: input === null
while (input === null) {
  //   input <- prompt('say hello')
  input = prompt('say hello');
  // :END WHILE
}

// message <- ''
let message = '';
// IF: input === 'hello'
if (input === 'hello') {
  //   message <- 'hello to you too!'
  message = 'hello to you too!';
  // ELSE:
} else {
  //   message <- 'good bye'
  message = 'good bye';
  // :END IF
}

// alert(message)
alert(message);
