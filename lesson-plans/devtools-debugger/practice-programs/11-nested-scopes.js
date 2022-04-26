'use strict';

/* 🐥 Nested Scopes

  this program has `debugger` statements on interesting lines
  skip/step through this code to study block scope in the debugger

  before each debugger statement try predicting:
  - what value will each variable have?
  - which variables will be uninitialized?
  - which debugger statement is next?
  - what will the Scope panel look like at the next debugger?

*/

// which variables are uninitialized?
debugger; // Script scope -->

let input = null;
while (input === null) {
  // which variable(s) are uninitialized?
  debugger; // one Block scope -->
  let maybeLongEnough = prompt(
    'enter something longer than 3 nextChars. \nall numbers will be removed',
  );

  if (maybeLongEnough !== null && maybeLongEnough.length > 3) {
    debugger; // no new variables, still one Block scope -->
    input = maybeLongEnough;
  }
}

debugger; // Script scope -->

let numberless = '';
for (let nextChar of input) {
  // for-of loops create a new block scope with only the iterator variable
  //  which variable(s) are uninitialized?
  debugger; // two Block scopes, what?! -->

  let isNumber = '0123456789'.includes(nextChar);
  if (!isNumber) {
    debugger; // no new variables, still two Block scopes -->
    numberless = numberless + nextChar;
  }
}

debugger; // Script scope -->

let message = 'your input without numbers:\n- ' + numberless;
alert(message);
