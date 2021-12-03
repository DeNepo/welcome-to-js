# Programs

So what is a program? It's something like this:

[![program diagram](../.assets/a-program.svg)](https://excalidraw.com/#json=_cj6JYwuO38PPGKxXN_cQ,3910Z7e2jGLZu4vjueG-Bg)

---

## Data In, Data Out

The basic job of a computer program is to process data. Even the most beautiful
and interactive programs are just processing data behind the scenes. One of the
biggest tricks to programming is figuring out how to _model_ your problem using
data so computer can help you solve the problem.

The programs you'll be studying in this module are focused on processing _text
data_ ("strings" in JavaScript). This is a good place to start because you are
already used to reading and working with text so it shouldn't be too hard to
understand what's happening inside the computer:

1. The user inputs some text data into a pop-up.
2. The program processes the data. (_tracing_!)
3. Some new data is displayed to the user in a pop-up.

Later on you'll learn how to make better user interfaces than just a pop-up, but
the main idea will remain the same: The user interface is just a human-friendly
way for the user to interact with your program, the actual program is running
behind the scenes processing their data and producing new data.

---

## JavaScript Strings

What is data? In the simplest sense, data is just information. This information
can be represented or stored in many different ways. JavaScript has several data
types, the one that matters most for now are _strings_. Strings are how
JavaScript stores and manipulates text:

```js
'use strict';

// strings are any text wrapped in quotation marks

console.log('this is a string');

// you can check type of some data using `typeof`
//  you'll learn a lot more about this later
//  for now just know that it's possible
console.log(typeof 'hello'); // "string"
console.log(typeof 5); // "number"
console.log(typeof '5'); // "string

// you can find the length of a string with `.length`
console.log('abc'.length);
console.log('ab'.length);
console.log('a'.length);
console.log(''.length);
```

You don't need to understand very much about JavaScript types for now, just that
the programs in this folder are all processing _text data_ represented in
JavaScript by _strings_.

---

## Programs to Study

This folder has a few programs for you to study. You don't need to understand
the source code just yet, you'll take a deep look at one program in the next
chapter.

For now focus on understanding each program at a higher level like in the
diagram at the top of this README. Practice explaining what is happening in each
program using these terms:

- **Program Behavior**: What does the program do? What happens to the user data?
  how is it transformed or processed in the program? You can understand this
  just by comparing inputs and output! You don't need to read a single line of
  code.
- **Data In**: What data does the user input into the program, be specific!
- **Data Out**: What data is output to the user at the end of the program, be
  specific!
