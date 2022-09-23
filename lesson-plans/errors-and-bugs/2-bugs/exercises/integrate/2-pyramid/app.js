import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let bricks = readString('pyramid-bricks');

  // --- build a pyramid ---

  let pyramid = '';
  for (const brick of bricks) {
    pyramid = pyramid + '\n' + pyramid + brick;
  }

  // --- display the pyramid ---

  displayString('out', pyramid);
});
