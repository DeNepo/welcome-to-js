// #todo

'use strict';

/*
  log the user's input
  log the every character that is removed
    hint: you may need to write an `else`
  log the final result
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

let keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (let character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
