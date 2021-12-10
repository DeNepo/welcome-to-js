'use strict';

/*
  practice tracing it different ways:
  - use "variables" to check how each variable is used
  - open the code in JS Tutor and step through the program
  - use the "trace" button and read the console output
  - fill out a trace table based on the console output
  - use "highlight" to trace the code by drawing on it

  looking for a challenge? Try the "debug" button

*/

/* --- assigning new values to a variable --- */

// declare name using let
// initialize to "Gödel"
let name = 'Gödel';

/*
  the initialized value is now stored in this variable:
*/

// read name: "Gödel"
name;

// assign name: "Hofstadter"
name = 'Hofstadter';

/*
  a variable's value can change during a program
  each time you read it there may be a different value stored
*/

// read name: "Hofstadter"
name;

// assign name: "Schoenberg"
name = 'Schoenberg';

/*
  a variable's final value is the last value assigned to it in the program
*/

// read name: "Schoenberg"
name;
