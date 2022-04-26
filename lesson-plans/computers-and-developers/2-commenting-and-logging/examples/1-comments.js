'use strict';

/* Comments (static information)

  comments are ignored by the computer and read by developers

  an important concept to understand is "stale comments"
    this is when you change the code but forget to update the comments
    stale comments make a program very confusing to read!
  helpful comments should describe WHY the program exists
    and HOW the program is structured
    these "higher level" comments are less likely to go stale

  here are some good ideas for comments:
  - explain the program's objectives at the top of the file
  - describe WHY a line is important to the program
  - describe HOW different lines are related
  - mark an important goal in the program

  and here are some worse ideas:
  - explaining WHAT the code does (ie. // this line declares a variable)
  - mentioning specific details of the code (ie. // the `+` operator makes the message)
    what happens if the code changes and no longer uses `+`?
    it's "higher level" to say (ie. // create the message to display to the user)
  - random thoughts (ie. // i'm hungry, pizzzzzzaaaaa)

*/

// --- set initial values ---

let a = 'y';
let b = 'x';
let t = '';

// --- swap values between `a` & `b` ---

// store `a`s value for later
t = a;
// assign the correct value to `a` from `b`
a = b;
// assign `a`s initial value from `t` to `b`
b = t;

// --- all done!  `a` and `b` have swapped values ---
