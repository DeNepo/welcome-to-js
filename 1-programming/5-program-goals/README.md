# Program Goals

A "goal" an important step in the program, it can be a single line of code or
many lines of code. What's important is that a goal achieves one important step
along the way from the program's initial input to it's final output.

Learning to think of full programs as a series of smaller goals will help you to
understand code. Later on this skill will help you plan, write and collaborate
on your own programs.

In Welcome to JS many programs will have goals marked using a comment. When a
program doesn't have goals a good exercise is trying to mark the goals yourself.

How would you describe the goals in this program?

```js
'use strict';

/* The Loudenator

  This program takes the user input and makes it loud.

  Data In:
    any string

  Data Out:
    the input in all uppercase letters

*/

/* --- ?? --- */

let input = null;
while (input === null) {
  input = prompt('enter something quiet, it will become loud');
}

/* --- ?? --- */

let loudInput = input.toUpperCase();

/* --- ?? --- */

alert(loudInput);
```

---

## Exercises

The exercises in this folder have two parts:

1. **Label Goals**: Fill in the goal comments to describe what is eing achieved
   in each of the program's goals.
2. **Complete the Code**: Each program will have one or two lines missing and a
   comment describing what the line should do. You need to write the missing
   line(s) to complete the programs.

You can complete these exercises without understanding every line of code! Have
fun.
