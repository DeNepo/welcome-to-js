// #todo

'use strict';

let normalPhrase = null;
while (normalPhrase === null) {
  normalPhrase = prompt('enter something to flipflop');
}

let previous = '';
let flipFlopped = '';
for (let current of normalPhrase) {
  if (previous !== '') {
    flipFlopped = flipFlopped + current + previous;
    previous = '';
  } else {
    previous = current;
  }
}
if (flipFlopped.length < normalPhrase.length) {
  flipFlopped = flipFlopped + normalPhrase[normalPhrase.length - 1];
}

alert(flipFlopped);
