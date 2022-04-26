'use strict';

/* Console Logs

  the simplest way to see a trace of your program is `console.log`
    it's handy and will sometimes be all you need

  but your browser's DevTool Debugger has so much more to offer

  click the [run] button then read the logs to understand this program

  after you've finished this lesson, logs will never be enough again!

*/

let forwards = null;
while (forwards === null) {
  forwards = prompt('enter some text to reverse');
  console.log(forwards);
}

let backwards = '';
for (let nextChar of forwards) {
  backwards = nextChar + backwards;
  console.log(backwards);
}

let mirror = forwards + ' | ' + backwards;
alert(mirror);

console.log(mirror);
