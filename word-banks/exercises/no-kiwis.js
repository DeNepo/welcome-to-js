/*
  unused:
    mayContainKiwis
    possibleKiwi
    noKiwis
  used:

  hint: there are no distracting words in this exercise, all of them are used
*/

let mayContainKiwis = null;
while (mayContainKiwis === null) {
  mayContainKiwis = prompt('tell me something about food, but not about kiwis');
}

let possibleKiwi = '';
let noKiwis = '';
for (let char of _) {
  if (char === 'k' || char === 'K') {
    noKiwis = noKiwis + possibleKiwi;
    possibleKiwi = char;
  } else {
    possibleKiwi = possibleKiwi + char;
    if (_.toLowerCase() === 'kiwi') {
      noKiwis = noKiwis + '____';
      possibleKiwi = '';
    } else if (_.length > 4) {
      noKiwis = noKiwis + _;
      possibleKiwi = '';
    }
  }
}
noKiwis = _ + possibleKiwi;

alert(noKiwis);

/* -- errors --

*/
