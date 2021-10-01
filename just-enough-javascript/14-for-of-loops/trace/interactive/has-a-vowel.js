// #todo

'use strict';

let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let hasAVowel = false;

for (let letter of letters) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + letters + '" has at least one vowel');
} else {
  alert('"' + letters + '" does not have any vowels');
}
