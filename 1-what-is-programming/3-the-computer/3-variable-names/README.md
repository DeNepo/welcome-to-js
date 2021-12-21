# Variable Names

The computer cannot understand what your variable names _mean_, to a computer
`let asdf = 'hello';` is same as `let greeting = 'hello';` . Variable names are
100% for developers to understand the code and 0% helpful for the computer.

Computers just care how you _use_ the variables:

- Where is it declared?
- Is it initialized?
- Where is it read?
- Where is it assigned a new value?

When the computer is interpreting your code it's these "patterns" that make one
set of instructions different from another, not the variable names.

Consider these two programs, they both have different variable names but the
same instructions. Commented above each line is how the computer will interpret
your code (or close enough for now). Can you find anything different between the
comments in each program?

---

```js
'use strict';

console.log('--- program 1 --- ');

// declare variable 1: let
// initialize variable 1: "hello"
let greeting = 'hello';

// declare variable 2: let
// initialize variable 2: "!"
let excitement = '!';

// read from variable 1: "hello"
// read from variable 2: "!"
// assign to variable 1: "hello!"
greeting = greeting + excitement;

// read from variable 1: "hello!"
console.log(greeting);
```

---

```js
'use strict';

console.log('--- program 2 --- ');

// declare variable 1: let
// initialize variable 1: "hello"
let x = 'hello';

// declare variable 2: let
// initialize variable 2: "!"
let y = '!';

// read from variable 1: "hello"
// read from variable 2: "!"
// assign to variable 1: "hello!"
x = x + y;

// read from variable 1: "hello!"
console.log(x);
```
