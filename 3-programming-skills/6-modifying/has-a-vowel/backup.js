'use strict';

// you can copy-type this into the challenge files if you get too lost

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

let vowels = 'aeiouAEIOU';

let hasAVowel = false;
for (let char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
