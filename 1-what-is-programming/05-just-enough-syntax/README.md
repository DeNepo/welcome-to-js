# JS Syntax

Time to study the syntax of JavaScript before moving on to study full programs. It's not a problem if you don't understand what all of this code does yet. You'll get a chance in the next chapter to learn more about each language feature and how you can use them in a program. Right now you just need to focus on the _pieces_ and _structure_ of JavaScript source code.

JavaScript is a complicated programming languages with lots of syntax, but for now you only need to know a little bit of it. Here's a quick overview, you'll cover all of this again later so don't worry if it goes by too fast:

---

## Primitives

The smallest pieces of data in a JS program. There are many primitive types but you only need to know these for now:

<details>
<summary>expand for code snippet</summary>
<br>

```js
// "use strict" is a primitive! it's a string.
'use strict';

console.log('===== primitives =====');

console.log('--- strings --- ');
// strings are anything wrapped in quotation marks:
console.log('hello');
console.log('good bye');
console.log(''); // an empty string

console.log('--- numbers --- ');
// numbers are ... numbers
console.log(0);
console.log(1);
console.log(2);
console.log(10.5);

console.log('--- booleans --- ');
// booleans can be either true or false
//  they're like a yes/no or on/off switch
console.log(true);
console.log(false);

console.log('--- undefined --- ');
// undefined is the default value if no other value is present
console.log(undefined);

console.log('--- null --- ');
// null is a strange thing, you'll learn a lot about it later
console.log(null);
```

The browser's console will help you understand which types are logged:

```js
'use strict';

console.log('===== logging different types =====');

// notice that the console displays each type differently
// this is very helpful for understanding what is printed to the console

// not the same type!
console.log(null);
console.log('null');

// not the same type!
console.log(undefined);
console.log('undefined');

// not the same type!
console.log(1);
console.log('1');

// not the same type!
console.log(true);
console.log('true');
```

</details>

---

## Operators

Ways to transform data. An operator takes in 1 or more values and _evaluates to_ a new value. Operators in JavaScript are a huge topic with many details and exceptions, for now this should be enough. You'll cover operators in depth later on:

<details>
<summary>expand for code snippets</summary>
<br>

> hint: Try tracing these operators. Notice how the operator is evaluated **first**, and then the new value is logged? The code does not execute left to right! First it executes what's **inside** the parenthesis, then it executes the log.

```js
'use strict';

console.log('===== operators =====');

// here's the most important operators for the programs in this chapter

console.log('--- strict equality --- ');

// evaluates to true if two primitives are the same
console.log(1 === 1); // true
console.log(false === false); // true
console.log('hello' === 'hello'); // true
console.log(null === null); // true

// and to false if they are different
console.log(1 === '1'); // false
console.log(12 === 100); // false
console.log(false === true); // false
console.log(null === 'null'); // false

console.log('--- strict inequality --- ');

// evaluates to true if two primitives are different
console.log(1 !== '1'); // true
console.log(12 !== 100); // true
console.log(false !== true); // true
console.log(null !== 'null'); // true

// and to false if they are the same
console.log(1 !== 1); // false
console.log(false !== false); // false
console.log('hello' !== 'hello'); // false
console.log(null !== null); // false

console.log('--- string concatenation --- ');

// combines two or more strings into one string

console.log('h' + 'ell' + 'o'); // "hello"
console.log('he' + 'l' + 'lo'); // "hello"
console.log('h' + 'e' + 'l' + 'l' + 'o'); // "hello"
```

And one more useful operator that you will not need in programs just yet, but is helpful for understanding primitives:

```js
'use strict';

console.log('===== typeof operator =====');

// the typeof operator tells you the type of a value

console.log('--- strings --- ');

console.log(typeof 'hello'); // "string"
console.log(typeof 'good bye'); // "string"
console.log(typeof ''); // "string"

console.log('--- numbers --- ');

console.log(typeof 0); // "number"
console.log(typeof 1); // "number"
console.log(typeof 2); // "number"
console.log(typeof 10.5); // "number"

console.log('--- booleans --- ');

console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"

console.log('--- undefined --- ');

console.log(typeof undefined); // "undefined"

console.log('--- null --- ');

// the type of null is "object"
//  don't worry about that for now, just know that it is
console.log(typeof null); // "object"
```

</details>

---

## Identifiers

Words in a program used to help a developer understand what is happening. Variable names are an example of identifiers, you can change a variable's name and the computer will still follow the same instructions but a developer may have a harder time understanding the code.

<details>
<summary>expand for code snippet</summary>
<br>

```js
'use strict';

// there are two identifiers in this line of code:
//   -> console
//   -> log
console.log('===== identifiers =====');

/*
  Identifiers help the developer understand the code,
  but if your reassign their values to a new variable ...
    the computer instructions still work!

  Don't worry if this is not clear, it's a tricky thing/
  What matters for now is that you understand this:
    Identifiers can be changed without breaking the program.
*/

let print = console.log;

print('huh?');

let forDevelopers = console;
forDevelopers.log('huh??!!');

forDevelopers.print = forDevelopers.log;
forDevelopers.print('huh ?? !! ???');

forDevelopers.print = print;
forDevelopers.print('?? !! HUH ?? !! ???');
```

</details>

---

## Keywords

Words in the program that are not optional, the computer expects them to be in the right place and spelled exactly the right way. `let`, `if` and `while` are examples of key words.

<details>
<summary>expand for code snippet</summary>
<br>

```js
'use strict';

console.log('===== keywords =====');

// `let` is a keyword:
let input = null;

// `while` is a keyword:
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}

// `if` is a keyword:
if (input === '') {
  alert('that was not something');
  // `else` is a keyword:
} else {
  alert('thank you, have a nice day');
}
```

</details>

---

## Checks

Control flow structures like conditionals and loops have a _check_ after their keyword. These checks are surrounded by parenthesis and contain an _expression_ that will determine which line of code is executed next - `if (condition) { }`.

<details>
<summary>expand for code snippet</summary>
<br>

```js
'use strict';

console.log('===== checks =====');

let input = null;

// everything between these parenthesis is a check:
//     input === null
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}

// everything between these parenthesis is a check:
//  input === ''
if (input === '') {
  alert('that was not something');
  // `else` is a keyword:
} else {
  alert('thank you, have a nice day');
}
```

</details>

---

## Blocks

The lines between two curly braces `{ ... }` is called a _block_. Blocks are important because they contain the code that a control flow structure (`while`, `if`) controls. They're also important because of _block scope_ but you will learn about later.

<details>
<summary>expand for code snippet</summary>
<br>

```js
'use strict';

console.log('===== blocks =====');

// this program has 3 blocks

let input = null;
while (input === null) {
  // begin block 1
  input = prompt('enter something');
  console.log(input);
  // end block 1
}

if (input === '') {
  // begin block 2
  alert('that was not something');
  // end block 2
} else {
  // begin block 3
  alert('thank you, have a nice day');
  // end block 3
}
```

</details>

---

## Function Calls

Some variables (_identifiers_) store a _function_, functions are values that do something useful in a program like asking the user for input - `prompt()` - or printing something to the console - `console.log()`. To use a function you need to:

1. _call_ the function by writing parenthesis after it's identifier
2. _pass arguments_ inside the parenthesis.

That's all you need to know for now, you will learn much more about functions later on.

<details>
<summary>expand for code snippet</summary>
<br>

```js
'use strict';

console.log('===== blocks =====');

// this program has 4 function calls

let input = null;
while (input === null) {
  // function call
  //  identifier: prompt
  //  argument: "enter something"
  input = prompt('enter something');

  // function call
  //  identifier: log
  //  argument: input
  console.log(input);
}

if (input === '') {
  // function call
  //  identifier: alert
  //  argument: "that was not something"
  alert('that was not something');
} else {
  // function call
  //  identifier: alert
  //  argument: "thank you, have a nice day"
  alert('thank you, have a nice day');
}
```

</details>
