// #todo

'use strict';

let input = null;
while (input === null) {
  input = prompt('enter some text');
}

let repeated = '';
let i = 0;
while (i < input.length) {
  repeated = repeated + '\n' + input;
  i = i + 1;
}

alert(repeated);
