/* Frogopedia (program behavior)

  this program asks the user to input some information about frogs
    it will continually prompt the user until they input something with "frog" in it
  after the user inputs valid data, the program will display the cool new frog fact

*/

/* ----- declare variables to store program data ----- */

// declare, init: empty string (implementation)
//   (strategy)
//   this is used to capture user input from the prompt
//   once the input is valid, this variable is used by the final alert
let userInput = '';

/* ----- gather user input ----- */

// declare, init: false
//   a boolean flag variable used to determine when the I/O loop is finished
let inputIsAboutFrogs = false;

// test: the opposite of inputIsAboutFrogs (a boolean variable)
//   this is the Input/Output loop where user input is validated
//   it will continue looping until the user enters something about frogs
while (!inputIsAboutFrogs) {
  // call prompt: ask for something about frogs
  // write: the value returned from the prompt
  //   ask the user to input something about frogs
  //   this input will be validated
  //   when it's valid, the loop will end and it will be used in the final alert
  userInput = prompt('tell me something about frogs');

  /* -- did the user input nothing? -- */

  // test: check if `userInput` is an empty string or null
  //   if the user input nothing, it can't be about frogs
  if (userInput === '' || userInput === null) {
    // call alert: the cancel message
    //   let the user know their input was empty, fix it!
    alert('that is not something');
    // continue: to the beginning of the I/O loop
    //   skip the rest of this loop
    //   there's no point checking nothing to see if it's about frogs
    //   and also to avoid errors, null will cause an error if you search it
    continue;
  }

  /* -- does the input include 'frog'? -- */

  // test: check if "frog" (case insensitive) exists in the `userInput`
  //   if the user's input includes "frog", then it's valid!
  if (userInput.toLowerCase().includes('frog')) {
    // write: inputIsAboutFrogs to true
    //   this variable is our boolean flag
    //   setting it to true will end the while loop
    inputIsAboutFrogs = true;
    // continue: to the beginning of the I/O loop
    //   skip the final alert in this loop, the input was about frogs
    //   let the while loop evaluate the flag and finish
    continue;
  }

  // call alert: the invalid input message
  //   if we make it here, then the input was not about frogs
  //   so let the user know, then continue prompting them for new input
  alert('nope, not about frogs.  try again.');
}

/* ----- generate and alert the final output ----- */

// call alert: the success message
//   by the time we're here, the I/O loop has ended so the input must be about frogs
//   insert the user's frog info into a formatted string to alert
//   let the user know that they have entered a cool fact about frogs
alert('i just learned something cool about frogs!\n\n- "' + userInput + '"');
