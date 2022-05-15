'use strict';

/* 🥚 Stepping Through

  click the [debug] button to start the program in your debugger

  see the little arrow at the top of the pane on the right?
    it looks like this:  ->·
    this evaluates one statement at a time

  your challenge: step through to each commented line and pause
    look around the debugger, what do you see?

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);
