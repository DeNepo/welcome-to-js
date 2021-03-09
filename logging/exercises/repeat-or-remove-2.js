let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

let dontRemoveLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

let newPhrase = '';
if (!dontRemoveLetters) {
  let index = 0;
  while (index < phrase.length) {
    let char = phrase[index];
    newPhrase = newPrase + char + char;
    index = index + 1;
  }
} else {
  let theAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = 0;
  while (index < phrase.length) {
    let letter = phrase[index];
    if (theAlphabet.includes(letter.toLowerCase())) {
      newPhrase = phrase + letter;
    }
    index = index + 1;
  }
}

alert(newPhrase);
