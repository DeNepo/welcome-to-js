let letters = 'xyz';
// let letters = 'aeiou';
// let letters = 'zaei';
// let letters = 'aeiz';
// let letters = 'xyza';
// let letters = 'axyz';
// let letters = '';

let noVowels = '';
for (let character of input) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;
}

console.log(input + ' -> ' + noVowels);
