# Just Enough JavaScript: Cheat Sheet

A quick guide to all the JavaScript syntax and features you need for Welcome to
JS. On the left side of each section you have JavaScript, on the right you have
PseudoCode:

<table>

<tr>
<td>

## JavaScript

</td>
<td>

## PseudoCode

</td>
</tr>

<tr>
<td>

The exact syntax and spelling you must use for the computer to understand your
code.

</td>
<td>

Simpler, more flexible notation you can use to sketch your ideas before writing
JavaScript code.

</td>
</tr>
</table>

- [Strict Mode](#strict-mode)
- [Comments](#comments)
- [Logs](#logs)
- [Primitive Types](#primitive-types)
- [Operators](#operators)
- [Strings](#strings)
- [Variables](#variables)
- [Interactions](#interactions)
- [Block Scope](#block-scope)
- [Conditionals](#conditionals)
- [While Loops](#while-loops)
- [For-Of Loops](#for-of-loops)
- [Break](#break)
- [Continue](#continue)

---

## Strict Mode

Something you write at the top of your programs so the computer will catch more
of your mistakes than if you didn't use String Mode.

The biggest difference for now is how JavaScript will treat variables. As long
as you always `'use strict'` and always declare your variables you'll be fine.

<table>

<tr>
<td>

```js
'use strict';
```

</td>
<td>

```txt
// no strict mode in PseudoCode
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Comments

Notes written in your code for developers to read. The computer will ignore
these when executing your code.

<table>

<tr>
<td>

```js
// inline comment

/*
  block comment
*/
```

</td>
<td>

```txt
// inline comment

/*
  block comment
*/
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Logs

A simple way to print data to the developer console while the program is
running. This is helpful for knowing what data is stored in your program at
different points in execution.

<table>

<tr>
<td>

```js
console.log('hello');
```

</td>
<td>

```txt
// no need for logs in PseudoCode
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Primitive Types

The smallest pieces of data in a JS program. There are many primitive types but
you only need to know these for now:

<table>

<tr>
<td>

<!-- prettier-ignore -->
```js
// "boolean"
true;
false;

// "string"
''; // empty string
'hello';
'"hello"'; // quotes in a string

// "number"
0;
1;
1.5;
2;

// "undefined"
undefined;

// "object"
null;
```

</td>
<td>

```txt
// "string"
'' // empty string
'hello'
'"hello"'

// "boolean"
true
false

// "number"
0
1
1.5
2

// "undefined"
undefined

// "object"
null
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Operators

Ways to transform data. An operator takes in 1 or more values and _evaluates to_
a new value.

Operators in JavaScript are a huge topic with many details and exceptions, for
now this should be enough:

<table>

<tr>
<td>

```js
// typeof
typeof 'a string'; // "string"
typeof true; // "boolean"
typeof 1; // "number"
typeof null; // "object"
typeof undefined; // "undefined"

// strict equality
4 === '4'; // false
// strict inequality
4 !== '4'; // true

// string concatenation
'hello' + ' ' + 'world'; // "hello world"

// and
true && false; // false
// or
true || false; // true
// not
!true; // false

// addition
4 + 2; // 6
// subtraction
4 - 2; // 2
// multiplication
4 * 2; // 8
// division
4 / 2; // 2

// greater than
4 > 3; // true
4 > 4; // false
// less than
4 < 4; // false
4 < 5; // true
// greater than or equal to
4 >= 3; // true
4 >= 4; // true
4 >= 5; // false
// less than or equal to
4 <= 3; // false
4 <= 4; // true
4 <= 5; // true
```

</td>
<td>

```txt
// typeof
typeof 'a string'
typeof true
typeof 1
typeof null
typeof undefined

// strict equality
4 === '4'
// strict inequality
4 !== '4'

// string concatenation
'hello' + ' ' + 'world'

// and
true && false
// or
true || false
// not
!true

// addition
4 + 2
// subtraction
4 - 2
// multiplication
4 * 2
// division
4 / 2

// greater than
4 > 3
4 > 4
// less than
4 < 4
4 < 5
// greater than or equal to
4 >= 3
4 >= 4
4 >= 5
// less than or equal to
4 <= 3
4 <= 4
4 <= 5
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Strings

The data type used for storing and manipulating text data. Strings will be the
main type of data used in Welcome to JS.

<table>

<tr>
<td>

```js
// string length
''.length; // 0
'a'.length; // 1
'ab'.length; // 2

// string indexes
'abc'[0]; // 'a'
'abc'[1]; // 'b'
'abc'[2]; // 'c'

// --- string methods ---

'HeLlO'.toLowerCase(); // 'hello'
'HeLlO'.toUpperCase(); // 'HELLO'

'abc'.includes('b'); // true

'+a+b+c+'.replaceAll('+', ''); // 'abc'

'  abc    '.trim(); // 'abc'

'abc'.indexOf('a'); // 0
'abc'.indexOf(''); // 0
'abc'.indexOf('b'); // 1
'abc'.indexOf('bc'); // 1
'abc'.indexOf('x'); // -1

'abc'.slice(0); // 'abc'
'abc'.slice(1); // 'bc'
'abc'.slice(2); // 'c'

'abc'.slice(0, 0); // ''
'abc'.slice(0, 1); // 'a'
'abc'.slice(0, 2); // 'ab'
'abc'.slice(1, 1); // ''
'abc'.slice(1, 2); // 'b'
'abc'.slice(2, 2); // ''
```

</td>
<td>

```txt
// string length
''.length
'a'.length
'ab'.length

// string indexes
'abc'[0]
'abc'[1]
'abc'[2]

// string methods
'HeLlO'.toLowerCase()
'HeLlO'.toUpperCase()

'abc'.includes('b')

'+a+b+c+'.replaceAll('+', '')

'  abc    '.trim()

'abc'.indexOf('a')
'abc'.indexOf('')
'abc'.indexOf('b')
'abc'.indexOf('bc')
'abc'.indexOf('x')

'abc'.slice(0)
'abc'.slice(1)
'abc'.slice(2)

'abc'.slice(0, 0)
'abc'.slice(0, 1)
'abc'.slice(0, 2)
'abc'.slice(1, 1)
'abc'.slice(1, 2)
'abc'.slice(2, 2)
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Variables

Variables allow you to save values to use again later in your program.They're
kind of like a box that can only hold one thing at a time.

Variables are also an important tool for writing code that is clear for other
developers to read and understand. Using helpful names can make your code read
(sort of) like a story.

<table>

<tr>
<td>

```js
// declare
let name;

// declare and initialize
let name = 'Java';

// read
alert(name);

// assign
name = 'Script';
```

</td>
<td>

```txt
// declare
//  no need to declare variables

// declare and initialize (same as assign)
name <- 'Java'

// read
alert(name)

// assign a new value
name <- 'Script'
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Interactions

Ways for users to pass data into your programs (_input_), and ways to display
data from inside your program to a user (_output_);

<table>

<tr>
<td>

```js
// --- input ---

// allows users to say "yes" or "no"
//  inputs a boolean value into your program
let didConfirm = confirm('yes or no');

// allows the user to enter text or click "cancel"
//  inputs a string or null into your program
let userInput = prompt('enter some text');

// --- output ---

// displays a message but does not take user input
alert('a message');
```

</td>
<td>

```txt
// --- input ---



didConfirm <- confirm('yes or no')



userInput <- prompt('enter some text')

// --- output ---


alert('a message')
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Block Scope

Variables declared _inside_ curly braces can only be used inside those curly
braces. Trying to use a variable in an _outer scope_ will cause an error.

Variables declared _outside_ of curly braces can be used outside or inside the
curly braces.

<table>

<tr>
<td>

```js
let outer = 'declared outside the block';
{
  outer = 'reassigned in the block';
  let inner = 'only defined in the block';
}
console.log(outer); // 'reassigned in ...'
console.log(inner); // ReferenceError
```

</td>
<td>

```txt
// don't worry about scope in pseudo code
// you can fix scoping when you translate to JS





```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Conditionals

Execute different blocks of code depending on whether an expression evaluates to
`true` or to `false`:

<table>

<tr>
<td>

```js
if (anExpression) {
  // path 1: if anExpression is true
}

if (anExpression) {
  // path 1: if anExpression is true
} else {
  // path 2: if anExpression is false
}

if (firstExpression) {
  // path 1: if firstExpression is true
} else if (secondExpression) {
  // path 2: if secondExpression is true
} else {
  // path 3: if both expressions are false
}
```

</td>
<td>

```txt
IF: anExpression
  // path 1
:END IF

IF: anExpression
  // path 1
ELSE:
  // path 2
:END IF

IF: firstExpression
  // path 1
ELSE: IF: secondExpression
  // path 2
ELSE:
  // path 3
:END IF
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## While Loops

Repeat a block of code as long as an expression evaluates to `true`.

1. Evaluate the expression
2. Check if it is `true` or `false`
   1. if it is `true`, execute the block
   2. return to step 2
3. Move on to the next line after the loop

<table>

<tr>
<td>

```js
while (anExpression) {
  // loop body
}

// next line after the loop
```

</td>
<td>

```txt
WHILE: anExpression
  // loop body
:END WHILE
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## For-Of Loops

Iterate over a string, executing the loop body once for each character.

A new variable is declared for each character and that variable is scoped to the
block. Each time the block is executed the variable stores the next character in
the string.

<table>

<tr>
<td>

```js
for (let character of 'hello') {
  // loop body
}

// next line after the loop
```

</td>
<td>

```txt
FOR: character OF 'hello'
  // loop body
:END FOR-OF
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Break

Exit a loop immediately and skip to the next line after the loop.

<table>

<tr>
<td>

```js
while (anExpression) {
  break; // exit the loop immediately
  // this line is not executed
}

// next line after the loop
```

</td>
<td>

```txt
WHILE: anExpression
  BREAK
:END WHILE
```

</td>
</tr>

<tr>
<td>

```js
for (let character of 'hello') {
  break; // exit the loop immediately
  // this line is not executed
}

// next line after the loop
```

</td>
<td>

```txt
FOR: character OF 'hello'
  BREAK
:END FOR-OF
```

</td>
</tr>
</table>

[TOP](#just-enough-javascript-cheat-sheet)

---

## Continue

Skip the rest of the loop body and go to the next iteration.

<table>

<tr>
<td>

```js
while (anExpression) {
  continue; // skip to the the loop check
  // this line is not executed
}

// next line after the loop
```

</td>
<td>

```txt
WHILE: anExpression
  CONTINUE
:END WHILE
```

</td>
</tr>

<tr>
<td>

```js
for (let character of 'hello') {
  continue; // skip to the next character
  // this line is not executed
}

// next line after the loop
```

</td>
<td>

```txt
FOR: character OF 'hello'
  CONTINUE
:END FOR-OF
```

</td>
</tr>
</table>
