'use strict';

/* 🥚 Stepping Through

  click the [debug] button to start the program in your debugger

  see the little arrow at the top of the pane on the right?
    it looks like this:  ->·
    this evaluates one statement at a time

  your challenge: step through to each commented line and pause
    look around the debugger, what do you see?

*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
// pause here
for (let next of phrase) {
  // pause here
  if (next !== previous) {
    // pause here
    noRepetitions = noRepetitions + next;
  }
  // pause here
  previous = next;
}

alert(noRepetitions);
