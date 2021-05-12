/* --- get a phrase from the user --- */
let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

/* --- ask the user how to process the phrase --- */
let keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

/* --- either keep the letters, or repeat the characters --- */
let newPhrase = '';
if (keepLetters) {
  /* --- create a variable storing all letters, lower cased --- */
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  /* --- iterate through each character of the user's phrase --- */
  for (let character of phrase) {
    /* --- if the character is a letter, add it to the new phrase --- */
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  /* --- iterate through each character in the user's phrase --- */
  for (let character of phrase) {
    /* --- append each character twice to the new phrase --- */
    newPhrase = newPhrase + character + character;
  }
}

/* --- alert the new phrase --- */
alert(newPhrase);
