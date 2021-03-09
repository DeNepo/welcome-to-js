# Forest and Trees

> Code Comments: “What questions would be asked by someone looking at this code for the first time?”
>
> - [Scottford](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

When studying code to understand a new program, thinking of forests and trees might help. This set of examples and exercises will help you learn how to do a close reading of JavaScript programs.

```js
/*
  describe what the program does from the user's perspective
*/

/* -- chunk (an important step in the program) -- */

// what code is written in line of the program?
//  why is this line of code here?
//  what variables does it use?
//  how does it relate to other lines?
//  ... anything else you notice?
let line = 'of code';

/* -- chunk (an important step in the program) -- */

// what code is written in line of the program?
//  why is this line of code here?
//  what variables does it use?
//  how does it relate to other lines?
//  ... anything else you notice?
alert(line);
```

1. [Forest](#forest)
2. [Trees](#trees)
3. [Forest & Trees](#forest--trees)
4. [Chunks](#chunks)

---

## Forest

Understanding what the entire program does, without looking at any single line of code.

- what data is at the beginning of the program?
- what data is at the end of the program?
- can a user interact with the program?
  - when do they interact? (beginning, middle, end, ...)
  - how is the user's input processed?
  - can the user's input influence the program's flow?
- ... what else can you say about the program?

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  if they input an invalid string, they are told it is baaaad
  otherwise the program is sad :(
*/

let userInput = prompt('enter the word "yes", upper or lower case');

let reaction = '';
if (userInput === null) {
  reaction = ':(';
} else if (userInput.toLowerCase() === 'yes') {
  reaction = userInput + '!';
} else {
  reaction = 'baaaaad: ' + userInput;
}

alert(reaction);
```

[TOP](#forest-and-trees)

---

## Trees

Understanding what each line of code does and how it works, without taking a step back to understand the whole program.

- what language features are used in this line?
- what other language features could be used instead?
- what does the variable name(s) tell you about the code?
- ... what else do you notice about each line?

> if a line is important you can use `!`
>
> if a line is not clear you you can use `?`

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  if they input an invalid string, they are told it is baaaad
  otherwise the program is sad :(
*/

// call prompt: instructions for the program
// declare, init: the value returned from calling `prompt` (string or null)
let userInput = prompt('enter the word "yes", upper or lower case');

// declare, init: an empty string
let reaction = '';
// test: compare the input to null
if (userInput === null) {
  // write: a sad face
  reaction = ':(';
}
// test: convert the input to lower case and compare it to 'yes'
else if (userInput.toLowerCase() === 'yes') {
  // write: the input concatenated with an exclamation mark
  reaction = userInput + '!';
}
// the input is not null, and is not 'yes'
else {
  // write: baaaad concatenated with the input
  reaction = 'baaaaad: ' + userInput;
}

// call alert: the correct reaction
alert(reaction);
```

[TOP](#forest-and-trees)

---

## Forest & Trees

Put together what you learned about the forest and the trees.

- How does each line of code contribute to the program's overall behavior?
- Which lines of code are related?
- Which line(s) of code seem the most important?
- How is each variable used?
- ... what other connections do you notice between lines?

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  if they input an invalid string, they are told it is baaaad
  otherwise the program is sad :(
*/

// call prompt: instructions for the program
// declare, init: the value returned from calling `prompt` (string or null)
//   this line explains to the user what they need to input
//   the `userInput` variable is used later on to check if the user input a valid string
let userInput = prompt('enter the word "yes", upper or lower case');

// declare, init: an empty string
//  this variable will be assigned a different values depending on what the user provided
//  the value in `reaction` will be used at the end of the program to alert the user
let reaction = '';
// test: compare the input to null
//  this is to check if they canceled the prompt
if (userInput === null) {
  // write: a sad face
  //  let the user know how much they have disappointed you
  reaction = ':(';
}
// test: convert the input to lower case and compare it to 'yes'
//   checking the user input to make sure they put in a valid string
//   this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
else if (userInput.toLowerCase() === 'yes') {
  // write: the input concatenated with an exclamation mark
  //   this is the path for valid user inputs
  //   the user will be congratulated for following instructions
  reaction = userInput + '!';
}
// the input is not null, and is not 'yes'
//  they did input something, but it was not correct
else {
  // write: baaaad concatenated with the input
  //   this is the path for invalid user inputs (things that aren't some form of "yes")
  //   it will tell users that they messed up baaaaadly
  reaction = 'baaaaad: ' + userInput;
}

// call alert: the correct reaction
//  all the logic is done, nothing left but to send your reaction to the user
alert(reaction);
```

[TOP](#forest-and-trees)

---

## Chunks

So you see the forest and the trees? Time to see the chunks!

A "chunk" of code is a group of lines that work together to achieve one main step in the program. One way to decide which lines belong to the same chunk is to look at your forest & tree comments. If you see a group of lines who's forest & tree comment server the same purpose, or who all seem to be necessary for the other, you may be looking at a chunk

You can label these with commented line dividers and a short title.

```js
/*
  this program asks a user to input "yes", with upper or lower case letters
  these are some example correct inputs:
  - YeS, yes, YEs, YES, ...

  if the user inputs a valid string, they'll be congratulated.
  if they input an invalid string, they are told it is baaaad
  otherwise the program is sad :(
*/

/* --- gather user input --- */

// call prompt: instructions for the program
// declare, init: the value returned from calling `prompt` (string or null)
//   this line explains to the user what they need to input
//   the `userInput` variable is used later on to check if the user input a valid string
let userInput = prompt('enter the word "yes", upper or lower case');

/* --- create a reaction to their input --- */

// declare, init: an empty string
let reaction = '';

// test: compare the input to null
//  this is to check if they canceled the prompt
if (userInput === null) {
  // write: a sad face
  //  let the user know how much they have disappointed you
  reaction = ':(';
}
// test: convert the input to lower case and compare it to 'yes'
//   checking the user input to make sure they put in a valid string
//   this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
else if (userInput.toLowerCase() === 'yes') {
  // write: the input concatenated with an exclamation mark
  //   this is the path for valid user inputs
  //   the user will be congratulated for following instructions
  reaction = userInput + '!';
}
// the input is not null, and is not 'yes'
//  they did input something, but it was not correct
else {
  // write: baaaad concatenated with the input
  //   this is the path for invalid user inputs (things that aren't some form of "yes")
  //   it will tell users that they messed up baaaaadly
  reaction = 'baaaaad: ' + userInput;
}

/* --- communicate your program's reaction to the user -- */

// call alert: the correct reaction
//  all the logic is done, nothing left but to alert hte final value of `reaction`
alert(reaction);
```

---

## More about commenting code

- [better-programming](https://medium.com/better-programming/javascript-clean-code-comments-c926d5aae2cb)
- [elegantthemes](https://www.elegantthemes.com/blog/wordpress/how-to-comment-your-code-like-a-pro-best-practices-and-good-habits)
- [4 reasons to comment](https://blog.submain.com/4-reasons-need-code-comments/)
- [the pros and cons](https://www.techrepublic.com/article/the-pros-and-cons-but-mostly-pros-of-comments-in-code/)
- [comments in your code](https://medium.com/better-programming/comments-in-your-code-730cfd1dde02)
- [the good, the bad, the ugly](https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/)
