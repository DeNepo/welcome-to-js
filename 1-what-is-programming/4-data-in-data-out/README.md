# Data In, Data Out: I/O

So what is a program? It's something like this:

![program diagram](../../assets/a-program.png)

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
console.log('abc'.length); // 3
console.log('ab'.length); // 2
console.log('a'.length); // 1
console.log(''.length); // 0

// string concatenation:
//  you can combine two strings using concatenation
console.log('a' + 'b' + 'c'); // 'abc'
```

You don't need to understand very much about JavaScript types for now, just that
the programs in this folder are all processing _text data_ represented in
JavaScript by _strings_.

---

## Programs to Study

A very important skill to learn as a programmer is not being afraid of code you
don't understand. There is always _something_ you can understand and there is
always a way to understand the rest. You aren't expected understand all the
syntax in this folder just yet.

Instead focus on what you _can_ understand about each program at a higher level,
like in the diagram at the top of this README. For all of these examples and
exercises try running the program many times inputting different data and seeing
what comes out.

Practice explaining what is happening in each program using these terms:

- **Program Behavior**: You can answer these questions just by comparing inputs
  and outputs! You don't need to read a single line of code:
  - What does the program do?
  - What happens to the user data, how is it transformed or processed in the
    program?
- **Data In**: What data does the program expect? Try to say this in a normal
  human sentence.
- **Data Out**: What data does the program expect? Try to say this in a normal
  human sentence.
- **Test Cases**: Specific examples of data that goes in and the data that comes
  out.

In the `/examples` folder you will find a few programs with a comment describing
the **behavior**, **data in** and **data out**. Your challenge in `/exercises`
is to fill in the same information for new programs.

Be _very careful_ about your formatting! Study the example comments closely and
do your best to format yours _exactly_ the same:

```js
'use strict';

/* Program Title

  Description of program's behavior.

  Data In:
    Describe the data that goes in.

  Data Out:
    Describe the data that comes out.

  Test Cases:
    'an example input' -> 'the matching output'
    'another input' -> 'the other output'
    ...

*/

// ... the rest of the code
```
