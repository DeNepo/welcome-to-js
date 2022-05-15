'use strict';

/* More Practice 1

  another program to practice with the debugger

*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with the same characters more than once\n all repeats will be removed',
  );
}

let noRepeats = '';
for (let character of phrase) {
  if (!noRepeats.includes(character)) {
    noRepeats = noRepeats + character;
  }
}

alert('"' + phrase + ' -> "' + noRepeats + '"');
