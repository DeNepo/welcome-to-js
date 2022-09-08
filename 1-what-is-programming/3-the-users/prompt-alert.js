'use strict';

/* user interactions

  different programming environments have different user interactions.
  in the browser the main one is the DOM (Document Object Model)
    this is how everything you see on your screen is created!
    but you won't be studying that for now

  the browser has some simpler ways to interact with the user.
  you will be focusing on these for a while:

    alert: displays a message to the user
    prompt: asks the users to input some text
    confirm: asks a user to say "yes" or "no"

  all of these instruct the computer to show something to the user.
  the program will pause until the user responds
  then the program continues executing, using the user's input

*/

// alert just displays text, you cannot type anything
alert('(alert) hello! the program is paused until you click "ok"');

// prompt allows the user to pass a string or `null` into the program
//  (you'll learn more about strings and `null` very soon)
let input = prompt('(prompt) you can type then click "ok" or "cancel"');
console.log(input);

alert(
  'no try running the program again passing different input. \n\n' +
    'PS. check your console!',
);
