'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);
