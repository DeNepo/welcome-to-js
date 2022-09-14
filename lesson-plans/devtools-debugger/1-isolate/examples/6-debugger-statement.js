'use strict';

/* 🐥 Debugger Statement

  The `debugger` statement will make your program pause in the devtools

  `debugger` statements are saved in your source code
  you can not change them while the program is running

*/

let didClickOk = confirm('please click "ok":');

let message = '';
debugger;
if (didClickOk === true) {
  message = 'thank you!';
} else {
  message = ':(';
}

alert(message);
