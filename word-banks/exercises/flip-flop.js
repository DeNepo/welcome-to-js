/*
  unused:
    normalPhrase
    length
    current
    previous
  used:

*/

let normalPhrase = null;
while (normalPhrase === null) {
  normalPhrase = prompt('enter something to flipflop');
}

let _ = '';
let flipFlopped = '';
for (let _ of normalPhrase) {
  if (previous !== '') {
    flipFlopped = flipFlopped + current + previous;
    previous = '';
  } else {
    previous = current;
  }
}
if (flipFlopped._ < normalPhrase._) {
  flipFlopped = flipFlopped + normalPhrase[_.length - 1];
}

alert(flipFlopped);

/* -- errors --

*/
