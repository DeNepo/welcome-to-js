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

// declare using let: pattern
// initialize to "."
let pattern = '.';

/*
  variable assignments go from the right side of `=` to the left

  first the code on the right side of `=` will be evaluated
  then the new value is assigned to the variable on the left
*/

// read pattern: "."
// operation: "." + "@"
//    -> ".@"
// assign pattern: ".@"
pattern = pattern + '@';

/*
  the value in a variable can changes during a program

  `pattern` was initialized to ".", but now it is ".@"
    next it will be "@.@"
*/

// read pattern: ".@"
// operation: "@" + ".@"
//    -> "@.@"
// assign pattern: "@.@"
pattern = '@' + pattern;

/*
  a variable must be read every time it is used
  even if it is used twice in the same line@
*/

// read pattern: "@.@"
// read pattern: "@.@"
// operation: "@.@" + "@.@"
//    -> "@.@@.@"
// assign pattern: "@.@@.@"
pattern = pattern + pattern;

// read pattern: "@.@@.@"
pattern;
