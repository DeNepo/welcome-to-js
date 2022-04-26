'use strict';

/* 🥚 Scope Panel

  go through this program one step at a time and watch the Scopes panel
    this shows you the CURRENT VALUE of each variable in your program
  the Scope Panel is one of the most important tools you have to understand code

  before pressing the "step" button:
  - predict which line will be next
  - predict what will change in the Scopes panel -->

  after pressing the "step":
  - were you right about which line was next?
  - were you right about what changed in the Scopes panel? -->

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
