// #todo

'use strict';

let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let noConsonants = true;

for (let letter of letters) {
  let lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
    break;
  }
}

if (noConsonants) {
  alert('"' + letters + '" has no consonants');
} else {
  alert('"' + letters + '" has at least one consonant');
}
