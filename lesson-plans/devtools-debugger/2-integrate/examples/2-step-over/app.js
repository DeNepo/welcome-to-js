import {
  whenFormDataChanges,
  readString,
  readBoolean,
  readNumber,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

/* Stepping Over

  When you step through a program, it will go through every line
    this includes functions written in a different file
  sometimes you just want to see the result, not every line

  You can use the "step over" button to skip the code inside a function
    this way you can keep going through your program
    without being distracted by the extra code

  PS. you don't need to understand functions just yet
    for now you just need to skip over them in the devtools

*/

debugger; // once when the script is loaded
console.log('--- the script is loading ---');

whenFormDataChanges('example-data', () => {
  debugger; // each time the form data changes
  console.log('--- form data has changed ---');

  // --- read user input from the DOM ---

  // step over this line
  let string = readString('string-value');

  // step over this line
  let boolean = readBoolean('boolean-value');

  // step over this line
  let number = readNumber('number-value');

  // --- display text to the user ---

  // step normally through this line
  let message =
    'string:  ' + string + '\nboolean: ' + boolean + '\nnumber:  ' + number;

  // step over this line
  displayString('example-output', message);
});

console.log('--- the script has finished loading ---');
