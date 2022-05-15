'use strict';

/* More Practice 1

  another program to practice with the debugger

*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with the same character repeated in a row\n the extra repeats will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (let next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
  }
  previous = next;
}

alert(noRepetitions);
