import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let left = readString('string-a');

  let right = readString('string-b');

  // --- sort them input by length ---

  let sortedInputs = '';
  if (left.length <= right.length) {
    sortedInputs = left + ', ' + right;
  } else if (right.length <= left.length) {
    sortedInputs = right + ', ' + left;
  } else {
    sortedInputs = left + '\n' + right;
  }

  // --- display the sorted strings ---

  displayString('sorted', sortedInputs);
});
