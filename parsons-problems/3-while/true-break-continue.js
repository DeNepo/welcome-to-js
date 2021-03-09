/* while true, break, continue

  create a while loop that is always true

  then use break & continue in the loop body for control flow

*/

while (true) {
  let userInput = prompt('enter something to leave this loop');

  if (userInput !== null && userInput !== '') {
    break;
  }
}

alert('done!')


// begin distractors

while (false) { // distractor
while (userInput !== null && userInput !== '') { // distractor
continue; // distractor
