import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake:

  the fix(es):
*/

whenFormDataChanges('input', () => {
  console.log(--- form data changed ---);

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
