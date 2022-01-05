'use strict';

/* Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    Any string

  Data Out:
    A string describing if the user's input was "cat" or not

  Test Cases:
    '' -> '"" is not a cat'
    'cat' -> 'thank you for the cat'
    'anything else' -> '"anything else" is not a cat'

*/

/* --- gather the user's input (canceling not allowed) --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
  console.log('user input:', input);
}

/* --- check the input and create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
  console.log('path: if');
} else {
  message = 'thank you for the cat';
  console.log('path: else');
}
console.log('final message:', message);

/* --- display the message for the user --- */

alert(message);

/*  =====   different ways to study code   =====

  there are many different ways you can study code
  take some time to explore these different options:

  static: study the code as text, not a running program
    highlight -> draw on the code, helpful when studying in a group
    parsonize -> converts the code into a parsons problem
    flowchart -> generates a flowchart from the code
    pseudo    -> converts code to pseudo code
    variables -> shows where and how each variable is used
    blanks    -> generates a fill-in-the-blanks exercise
    writeme   -> practice rewriting the code from memory
                  or group study: one person reads and the others write
    ask me    -> logs questions about the code to the console
                  but it doesn't log answers! you need to discuss those

  dynamic: study the running program's behavior
    run       -> runs the code, nothing fancy
    table     -> manually trace each variable use
    trace     -> log each step of the program to the console
                  helpful for checking your trace tables
    --- challenge ---
    debug     ->  step through the code in your browser's debugger
                  you can enable the debug button from >> OPTIONS <<


  what happens if you highlight some lines of code then use these options?

*/
