/* -- get a phrase from the user -- */

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

/* -- ask the user how to process the phrase -- */

let dontRemoveLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

/* -- decide which logic to use -- */

let newPhrase = '';
if (!dontRemoveLetters) {
  /* -- repeat each character -- */

  let index = 0;
  while (index < phrase.length) {
    let char = phrase[index];
    newPhrase = newPrase + char + char;
    index = index + 1;
  }
} else {
  /* -- remove everything that is not a letter -- */

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

/* -- communicate the result -- */

alert(newPhrase);
