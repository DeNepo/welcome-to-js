'use strict';

let animal = 'frog';

let userInput = '';
let inputIsAboutAnimal = false;

while (!inputIsAboutAnimal) {
  userInput = prompt('tell me something about ' + animal + 's');

  if (userInput === '' || userInput === null) {
    alert('that is not something');
    continue;
  }

  if (userInput.toLowerCase().includes(animal)) {
    inputIsAboutAnimal = true;
    continue;
  }

  alert('nope, not about ' + animal + 's.  try again.');
}

alert(
  'i just learned something cool about ' +
    animal +
    's!\n\n- "' +
    userInput +
    '"',
);
