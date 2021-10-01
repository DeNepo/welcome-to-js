// #todo

'use strict';

let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let noVowels = true;

for (let letter of letters) {
  if ('aeiouAEIOU'.includes(letter)) {
    noVowels = false;
    break;
  }
}

if (noVowels) {
  alert('"' + letters + '" has no vowels');
} else {
  alert('"' + letters + '" has at least one vowel');
}
