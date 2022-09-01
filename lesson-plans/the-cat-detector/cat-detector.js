'use strict';

/* Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    ???

  Data Out:
    ???

  Test Cases:
    ???


  PS. try the "ask me" button!
*/

/* --- ??? --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- ??? --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- ??? --- */

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
    table     -> manually trace each variable using a trace table
    trace     -> log each step of the program to the console
                  helpful for checking your trace tables
    debug     ->  step through the code in your browser's debugger
                  you can enable the debug button from >> OPTIONS <<

*/
