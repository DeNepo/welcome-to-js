/* -- get a phrase from the user -- */

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

/* -- ask the user how to process the phrase -- */

let keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

/* -- decide which logic to use -- */

let newPhrase = '';
if (keepLetters) {
  /* -- remove everything that is not a letter -- */

  let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < phrase.length; i = i + 1) {
    let smallLetter = phrase[i].toLowerCase();
    if (smallLetters.includes(smallLetter)) {
      newPhrase = phrase + smallLetter;
    }
  }
} else if (!keepLetters) {
  /* -- repeat each character -- */

  for (let index = 0; index < phrase.length; index = index + 1) {
    let smallLetter = phrase[index];
    newPhrase = newPhrase + smallLetter + smallLetter;
  }
}

/* -- communicate the result -- */

alert(newPhrase);
