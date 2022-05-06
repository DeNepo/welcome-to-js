'use strict';

/* 🐥 Logpoints

  logpoints are like writing `console.log` in your code
    except they are defined in your Debugger, not the source code
  it's like `debugger` statements vs. breakpoints

  first practice placing logpoints in this program to trace each variable

  anything you can write in `console.log`, you can write in a logpoint!
    play around with logpoints after you've finished the suggested ones

*/

let input = null;
while (input === null) {
  // logpoint: the value stored in `input`
  input = prompt('enter some text to reverse');
}

let copy = '';
for (let nextChar of input) {
  // logpoint: the value stored in `copy`
  copy = copy + nextChar;
}

// logpoint: the value stored in `twice`
let twice = input + copy;
alert(twice);
