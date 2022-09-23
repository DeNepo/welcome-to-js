'use strict';

/*
  test cases:
    '' -> '"" has no vowels'
    'xyz' -> '"xyz" has no vowels'
    '!.-.!' -> '"!.-.!" has no vowels'
    'aeiou' -> '"aeiou" has at least one vowel'
    'hi' -> '"hi" has at least one vowel'

  experiment 1
    line:
    why:
    trying:

*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'aeiouAEIOU';

let hasAVowel = true;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = false;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
