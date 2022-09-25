'use strict';

/* 🐣 Breakpoints

  use the [debug] button to pause this program in the devtools

  click on a line number to create a breakpoint
    you can create as many as you want
  you can now use the big blue triangle button -->
    this button will skip ahead to the next breakpoint

  breakpoints are saved in your devtools, not in your source code
  you can change them while the program is running

*/

let didClickOk = confirm('please click "ok":');

let message = '';
// try setting a breakpoint on the conditional check
if (didClickOk !== true) {
  message = ':(';
} else {
  message = 'thank you!';
}

alert(message);
