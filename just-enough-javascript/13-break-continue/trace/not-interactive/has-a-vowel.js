// #todo

'use strict';

let letters = 'xyz';
// let letters = 'aeiou';
// let letters = 'zaei';
// let letters = 'aeiz';
// let letters = 'xyza';
// let letters = 'axyz';
// let letters = '';

let hasAVowel = false;

let index = 0;
while (index < letters.length) {
  let nextLetter = letters[index];
  if ('aeiou'.includes(nextLetter)) {
    hasAVowel = true;
    break;
  }
  index++;
}

if (hasAVowel) {
  console.log('"' + letters + '" has at least one vowel');
} else {
  console.log('"' + letters + '" does not have any vowels');
}
