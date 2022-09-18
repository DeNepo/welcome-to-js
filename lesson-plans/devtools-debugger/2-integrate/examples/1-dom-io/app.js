// --- import the DOM I/O functions to use in this program ---

//  there are only 5 functions, just enough to practice fundamentals
import {
  whenFormDataChanges,
  readString,
  readBoolean,
  readNumber,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

// --- listen for changes in the form's data ---
// pass the id of a form you want to use: "example-data"
// just use the `() => {` syntax for now, you'll study functions later
whenFormDataChanges('example-data', () => {
  // --- this code will be run each time the form data changes ---

  console.log('\n--- form data changed ---');

  // --- read user input from the DOM into your program ---

  // reads from an input with type "text"
  let string = readString('string-value'); // id="string-value"
  console.log(string);

  // reads from an input with type "checkbox"
  let boolean = readBoolean('boolean-value'); // id="boolean-value"
  console.log(boolean);

  // reads from an input with type "number"
  let number = readNumber('number-value'); // id="number-value"
  console.log(number);

  // --- display text to the user ---

  let message =
    'string:  ' + string + '\nboolean: ' + boolean + '\nnumber:  ' + number;
  console.log(message);

  // writes text into a <pre> tag, anything that was there will be overwritten
  displayString('example-output', message); // id="example-output"
});
