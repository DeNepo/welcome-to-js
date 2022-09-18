'use strict';

/* 🐥 Debugger Statement

  The `debugger` statement will make your program pause in the devtools

  `debugger` statements are saved in your source code
  you can not change them while the program is running

  If you use `debugger`, the program will stop even if you use the [run] button

*/

let didClickOk = confirm('please click "ok":');

let message = '';
debugger;
if (didClickOk !== true) {
  message = ':(';
} else {
  message = 'thank you!';
}

alert(message);
