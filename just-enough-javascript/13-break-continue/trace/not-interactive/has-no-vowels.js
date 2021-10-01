// #todo

'use strict';

let letters = 'xyz';
// let letters = 'aeiou';
// let letters = 'zaei';
// let letters = 'aeiz';
// let letters = 'xyza';
// let letters = 'axyz';
// let letters = '';

let noVowels = true;

let index = 0;
while (index < letters.length) {
  let nextLetter = letters[index];
  if ('aeiou'.includes(nextLetter)) {
    noVowels = false;
    break;
  }
  index++;
}

if (noVowels) {
  console.log('"' + letters + '" has no vowels');
} else {
  console.log('"' + letters + '" has at least one vowel');
}
