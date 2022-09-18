'use strict';

/* 🐣 Continue to Here

  click the [debug] button to study this program in the debugger

  then practice skipping ahead to the commented line:

  1. right click the line number on the left in the debugger
  2. select "continue to here"
  3. look around in the debugger, what do you notice?
      - which line is highlighted?
      - what has changed in the panels on the right? -->
  4. keep using "continue to here" on the same line
      skipping ahead helps focus on specific details in the program
      you no longer need to step through every line all the time
      it also helps you avoid stepping past the line you want to study

*/

let didClickOk = confirm('please click "ok":');

let message = '';
if (didClickOk !== true) {
  message = ':(';
} else {
  message = 'thank you!';
}

alert(message);
