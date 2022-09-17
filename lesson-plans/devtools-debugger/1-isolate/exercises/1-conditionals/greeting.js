'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first name instead of their name.
  - If the user gives their first name, ask for their last name.
  - If the user gives their last name, greet them with their full name. Otherwise, greet them with their first name.
*/
