# Program Goals

A "goal" an important step in a program, it can be a single line of code or many
lines of code. What matters is that a goal achieves one important step between
the program's initial input to it's final output.

Learning to think of full programs as a series of smaller goals will help you to
understand code. Later on this skill will help you plan, write and collaborate
on your own programs.

In Welcome to JS many programs will have goals marked using a comment. When a
program doesn't have goals a good exercise is trying to mark the goals yourself.

Here's an example of how you can complete the exercises in this chapter:

> **Don't forget to use the [format] button!**

<table>

<tr>
<td>

### Before

</td>
<td>

### After

</td>
</tr>

<tr>
<td>

```js
'use strict';

/* The Loudenator

  This program makes the user input louder.

  Data In:
    any string

  Data Out:
    the input in all uppercase letters

  Test Cases:

*/

/* --- ___ --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter something to make loud')
// :END WHILE

/* --- ___ --- */

// loudInput <- input.toUpperCase()

/* --- ___ --- */

// alert(loudInput)
```

</td>
<td>

```js
'use strict';

/* The Loudenator

  This program makes the user input louder.

  Data In:
    any string

  Data Out:
    the input in all uppercase letters

  Test Cases:
    '' -> ''
    'abc' -> 'ABC'
    'Hello Jon' -> 'HELLO JON'
    'JavaScript' -> 'JAVASCRIPT'

*/

/* --- get a string from the user --- */

// input <- null
let input = null;

// WHILE: input === null
while (input === null) {
  //   input <- prompt('enter something to make loud')
  input = prompt('enter something to make loud');
  // :END WHILE
}

/* --- convert all the letters to uppercase --- */

// loudInput <- input.toUpperCase()
let loudInput = input.toUpperCase();

/* --- display the loud string for the user --- */

// alert(loudInput)
alert(loudInput);
```

</td>
</tr>
</table>

---

## Exercises

The exercises in this folder have two parts:

1. **Test Cases**: Write a few test cases to make sure you understand the
   program.
1. **Label Goals**: Fill in the goal comments to describe what is being achieved
   in each of the program's goals.
1. **Complete the Code**: Each program will have some lines missing and some
   pseudo code describing what you should write. You need to write the line(s)
   to complete the programs.
   - _[format] your code every time you make a change!_

You can complete these exercises without understanding every line of code! Have
fun.
