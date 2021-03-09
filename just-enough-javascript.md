## Just Enough JavaScript

JavaScript is a huge and powerful programming language, this makes it exciting but also challenging to learn.

In this module you will only learn a small part of what JavaScript has to offer. You will learn _just enough_ JavaScript to make small programs that process text and interact with users. Why just enough, and not a little more? Because reading and understanding program logic is more important than JavaScript, so why let the code get in the way?

Below is all the JavaScript you will find in this module's examples and exercises. Don't be mistaken, there's a lot you can do with only this!

### For Developers

Parts of JavaScript that exist to help you understand your programs.

Comments and logging will not change what your program does, just how easy it is to understand.

<details>
<summary>🥚 Comments</summary>

```js
console.log('-- comments --');

// comments are for people to read, not computers
// these are both one-line comments

/* this is a block comment

  block comments are useful for writing longer messages

  - and for
  - things like
  - lists

*/
```

</details>
<details>
<summary>🥚 Logging</summary>

```js
// print a message to the browser's console
console.log('-- logging --');

// you can log more than one thing at a time
console.log('a', 'message', 'from', 'beyond'); // 'a', 'message', 'from', 'beyond'
```

</details>

### Booleans

A primitive type with two values: `true` and `false`.

These are helpful for making decisions in your programs, it's like asking `yes` or `no`.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof booleans --');

// there are only two boolean values:
console.log(true); // true
console.log(false); // false

// they both have the type "boolean"
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- booleans: strict equality --');

// boolean values are only strictly equal to themselves
console.log(true === true); // true
console.log(false === false); // true

// they are not equal to each other
console.log(true === false); // false
console.log(false === true); // false

// booleans are not equal to any other type
console.log(true === 'true'); // false
console.log(false === ''); // false
console.log(true === 12); // false
console.log(false === undefined); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
console.log('-- booleans: strict inequality --');

// boolean values are strictly inequal to everything but themselves
console.log(true !== true); // false
console.log(false !== false); // false

// they are not equal to each other
console.log(true !== false); // true
console.log(false !== true); // true

// booleans are not equal to everything else
console.log(true !== 'true'); // true
console.log(false !== ''); // true
console.log(true !== 12); // true
console.log(false !== undefined); // true
```

</details>
<details>
<summary>🥚 not</summary>

```js
console.log('-- not --');

// you can use ! to reverse true and false
console.log(!true); // false
console.log(!false); // true
```

</details>
<details>
<summary>🐣 and</summary>

```js
console.log('-- and --');

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

</details>
<details>
<summary>🐣 or</summary>

```js
console.log('-- or --');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

</details>

### Strings

A primitive type used for saving and working with text.

A string is anything wrapped in quotes: `'something'` or `"something"`

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof strings --');

// strings are anything wrapped in quotations, ' or "
console.log('hello!'); // 'hello!'
console.log('you say "hello", i say "good bye"'); // 'you say "hello", i say "good bye"'
console.log("you say 'hello', i say 'good bye'"); // "you say 'hello', i say 'good bye'"

// this is the empty string. it is a string, but with no characters
console.log(''); // ''

// you can check if something is a string with typeof
console.log(typeof ''); // 'string'
console.log(typeof 'trees'); // 'string'
console.log(typeof 'apple "the green" fruit'); // 'string'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- strings: strict equality --');

// two strings are the same thing if they have exactly the same characters
console.log('' === ''); // true
console.log('asdf' === 'asdf'); // true
console.log('12D' === '12D'); // true

// two strings with different characters are not the same string
console.log('' === ' '); // false
console.log('asdf' === 'Asdf'); // false
console.log('cow' === 'horse'); // false

// strings are never the same as different types
console.log('' === true); // false
console.log('true' === true); // false
console.log('12' === 12); // false
console.log('null' === null); // false
console.log('hello' === 100); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
console.log('-- strings: strict inequality --');
// the opposite of strict equality

// two strings are not inequal if they have exactly the same characters
console.log('' !== ''); // false
console.log('asdf' !== 'asdf'); // false
console.log('12D' !== '12D'); // false

// two strings with different characters are inequal
console.log('' !== ' '); // true
console.log('asdf' !== 'Asdf'); // true
console.log('cow' !== 'horse'); // true

// strings are always inequal to different types
console.log('' !== true); // true
console.log('true' !== true); // true
console.log('12' !== 12); // true
console.log('null' !== null); // true
console.log('hello' !== 100); // true
```

</details>
<details>
<summary>🥚 string concatenation</summary>

```js
console.log('-- string concatenation --');

// you can combine strings using +
console.log('abc' + '123'); // 'abc123'
console.log('a' + 'bc1' + '23'); // 'abc123'
```

</details>
<details>
<summary>🥚 newline character</summary>

```js
console.log('-- strings: newline character --');

// to have your string print on more than one line:
console.log('first line\nsecond line\nthird line');
```

</details>
<details>
<summary>🥚 .replaceAll</summary>

```js
console.log('-- .replaceAll --');

// returns a new string with the first argument replaced by the second
console.log('abc'.replaceAll('b', '')); // 'ac'
console.log('computers'.replaceAll('z', '!')); // 'computers'
console.log('hi from me, hi to you'.replaceAll('hi', 'bye')); // 'bye from me, bye to you'
```

</details>
<details>
<summary>🥚 .toLowerCase and .toUpperCase</summary>

```js
console.log('-- .toLowerCase and .toUpperCase --');

// returns a new string with all lower case letters
console.log('HackYourFuture'.toLowerCase()); // 'hackyourfuture'

// returns a new string with all upper case letters
console.log('HackYourFuture'.toUpperCase()); // 'HACKYOURFUTURE'
```

</details>
<details>
<summary>🥚 .trim</summary>

```js
console.log('-- .trim --');

// returns a new string with all the white space removed from the ends
console.log('  hello  '.trim()); // 'hello'
console.log('  hello'.trim()); // 'hello'
console.log('hello  '.trim()); // 'hello'
```

</details>
<details>
<summary>🥚 .includes</summary>

```js
console.log('-- .includes --');

// returns true or false
//  true: if the string includes the argument
//  false: if it does not
// upper/lower case matters
console.log('Abc'.includes('Ab')); // true
console.log('Abc'.includes('bc')); // true
console.log('Abc'.includes('ab')); // false
console.log('Abc'.includes('BC')); // false
```

</details>
<details>
<summary>🥚 .length</summary>

```js
console.log('-- .length --');

// out how many characters are in a string
console.log(''.length); // 0
console.log('a'.length); // 1
console.log('ab'.length); // 2
console.log('abc'.length); // 3
```

</details>
<details>
<summary>🥚 character indexes</summary>

```js
console.log('-- character indexes --');

// get a specific character from a string
//  careful, the first character is [0]!
console.log('abc'[-1]); // undefined
console.log('abc'[0]); // 'a'
console.log('abc'[1]); // 'b'
console.log('abc'[2]); // 'c'
console.log('abc'[3]); // undefined
```

</details>
<details>
<summary>🐣 .indexOf</summary>

```js
console.log('-- strings: .indexOf --');

// returns the index of a substring inside a string
console.log('abc'.indexOf('a')); // 0
console.log('abc'.indexOf('b')); // 1
console.log('abc'.indexOf('c')); // 2

// everything contains the empty string
console.log(''.indexOf('')); // 0
console.log('abc'.indexOf('')); // 0
console.log('abc...xyz'.indexOf('')); // 0

// you can search for more than one character
console.log('toads'.indexOf('ds')); // 3
console.log('abc'.indexOf('abc')); // 0

// if the search does not exist, indexOf returns -1
console.log('asdf'.indexOf('x')); // -1
console.log('JavaScript'.indexOf('Python')); // -1
console.log(''.indexOf('hello')); // -1
```

</details>

### Variables

Variables allow you to save values to use later in your program.

They're kind of like a box that can only hold one thing at a time.

<details>
<summary>🥚 declare and assign</summary>

```js
console.log('-- declare and assign --');

// declaring a variable with let
let favoriteTree;
console.log(favoriteTree); // undefined

// assigning a value to a variable
favoriteTree = 'palm';
console.log(favoriteTree); // 'palm'
// assigning a different value
favoriteTree = 'oak';
console.log(favoriteTree); // 'oak'

// declare and assign at the same time
let bread = 'fresh';
console.log(bread); // 'fresh'
```

</details>
<details>
<summary>🥚 different types</summary>

```js
console.log('-- variables: different types --');
// variables can store any type
//  and you can change the types all you want

// declare and assign a boolean value
let variable = true;
console.log(variable); // true

// assign a string to the variable
variable = 'computers';
console.log(variable); // 'computers'

// assign a number to the variable
variable = 2;
console.log(variable); // 2

// and another boolean
variable = false;
console.log(variable); // false
```

</details>
<details>
<summary>🥚 assigning results</summary>

```js
console.log('-- assigning results --');
// you can assign the result of an operation to a variable

// boolean logic
let falseOrTrue = false || true;
console.log(falseOrTrue); // true

// string concatenation
let favoriteTree = 'p' + 'a' + 'l' + 'm';
console.log(favoriteTree); // 'palm'

// replacing things in a string
let noJoy = 'enjoy life'.replaceAll('joy', '');
console.log(noJoy); // 'en life'

// searching a string with .includes
let hasAnApple = 'bananaapplemango'.includes('apple');
console.log(hasAnApple); // true
```

</details>
<details>
<summary>🥚 reading variables</summary>

```js
console.log('-- reading variables --');

// you can read the values stored in a variable
//  and use them anywhere you can use the value it stores

// operate on a string stored in a variable
let loudCar = 'vrooom'.toUpperCase();
let excitedCar = loudCar.replaceAll('O', '!');
console.log(excitedCar); // 'VR!!!M'

// use a string stored in a variable as an argument
let badLetter = 'f';
let goodLetter = 'd';
let happyAnimal = 'fog'.replaceAll(badLetter, goodLetter);
console.log(happyAnimal); // 'dog'

// all together
let characterName = '  harry potter   '.trim();
let titleLowerCase = 'Harry Potter and the Magical Thing'.toLowerCase();
let includesName = titleLowerCase.includes(characterName);
console.log(includesName); // true
```

</details>
<details>
<summary>🥚 ReferenceError</summary>

```js
console.log('-- ReferenceError 1 --');

// using a variable that was not declared with cause an error

// let animal; // uncomment this line to fix the error
animal = 'horse'; // ReferenceError: animal is not defined
```

```js
console.log('-- ReferenceError 2 --');

// a common mistake is spelling your variables incorrectly
let spellingMistake = 'oops!';
console.log(spelingMistake); // ReferenceError: spelingMistake is not defined
```

</details>
<details>
<summary>🥚 block scope</summary>

```js
console.log('-- block scope --');

// variables declared outside of curley are available inside the curley braces
let globalVariable = 'declared outside';
console.log(globalVariable);
{
  globalVariable = 're-assigned inside';
  console.log(globalVariable); // 're-assigned inside'

  // variables declared inside the curley braces are NOT availabe outside of them
  let blockVariable = 'declared inside';
  console.log(blockVariable); // 'declared inside'
}
console.log(globalVariable); // 're-assigned inside'
console.log(blockVariable); // ReferenceError: blockVariable is not defined

// PS. this also works with conditionals and while loops
//     you will not need to use blocks without a condition or loop
```

</details>

### Undefined

A primitive type used to represent nothing.

This is the default value for all variables that have not been assigned a value.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof undefined --');

console.log(undefined); // undefined
console.log(typeof undefined); // 'undefined'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- undefined: strict equality --');

// undefined is only strictly equal to undefined
console.log(undefined === undefined); // true

// any other strict equality is false
console.log(undefined === 'undefined'); // false
console.log(undefined === 0); // false
console.log(undefined === null); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
console.log('-- undefined: strict inequality --');
// this will always be the opposite of strict equality

console.log(undefined !== undefined); // false

// any other strict inequality is true
console.log(undefined !== 'undefined'); // true
console.log(undefined !== 0); // true
console.log(undefined !== null); // true
```

</details>
<details>
<summary>🥚 variables with undefined</summary>

```js
console.log('-- variables with undefined --');

// variables have the value undefined if you do not assign anything
let variable;
console.log(variable); // undefined
console.log(typeof variable); // 'undefined'

// assigning undefined to a variable is the same  as not assigning anything
variable = undefined;
console.log(variable); // undefined
console.log(typeof variable); // 'undefined'
```

</details>

### Null

Another primitive type used to represent nothing.

It's not possible to have `null` appear in your program by accident, if it's there it was put there on purpose. When you see `null` in a program it means that there is _supposed to be_ nothing, this is different than `undefined` which can happen by accident.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof null --');

// this is not intuitive, you just need to memorize it
console.log(null); // null
console.log(typeof null); // 'object'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- null: strict equality --');

// null is only strictly equal to null
console.log(null === null); // true

// any other comparison is false
console.log(null === 'null'); // false
console.log(null === 0); // false
console.log(null === undefined); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
console.log('-- null: strict inequality --');
// this will always be the opposite of strict equality

console.log(null !== null); // false

// any other strict inequality with null will be true
console.log(null !== 'null'); // true
console.log(null !== 0); // true
console.log(null !== undefined); // true
```

</details>
<details>
<summary>🥚 variables with null</summary>

```js
console.log('-- variables with null --');

// you need to assign null to a variable, it does not happen by accident
let variable;
console.log(variable); // undefined
console.log(typeof variable); // 'undefined'

variable = null;
console.log(variable); // null
console.log(typeof variable); // 'object'

// you can also assign null in the same line as declaring a variable
let breakfast = null;
console.log(breakfast);
console.log(typeof breakfast);
```

</details>

### User Interactions

3 ways to display text to a user or ask them for program input.

Learning to use these 3 functions will help you to understand primitive types and values.

<details>
<summary>🥚 alert</summary>

```js
console.log('-- alert --');
// alert: displays a message to the user
//  the user can only read the message, they can't input anything to your program
let alerted = alert('pancakes');

// alert will always return undefined, no matter what
console.log(alerted); // undefined
console.log(typeof alerted); // 'undefined'
```

</details>
<details>
<summary>🥚 confirm</summary>

```js
console.log('-- confirm --');
// confirm: display a message and ask the user to say "yes" or "no"

// run this example a few times with your console open. what happens if you:
//  click "ok"?
//  click "cancel"?
//  press the "enter" key on your keyboard?
//  pres the "esc" key on your keyboard?
let confirmed = confirm('want some pancakes?');

// confirm will always return a boolean value:
//  true if the user clicks ok
//  false if the user clicks cancel
console.log(confirmed); // true or false
console.log(typeof confirmed); // 'boolean'
```

</details>
<details>
<summary>🥚 prompt</summary>

```js
console.log('-- prompt --');
// example input/outputs to try
// what to be confused by
// what to pay attention to
// ie. empty string is something - later learn how to deal with this
// motivate for how this is important with forms and such later
//  types! values! validation!

// prompt: display a message and allow the user to input some text

// run this example a few times with your console open. what happens if you:
//  type something -> click "cancel" or press the "esc" key
//  type something -> click "ok" or press the "enter" key
//  do not type anything -> click "cancel" or press the "esc" key
//  do not type anything -> click "ok" or press the "enter" key
let prompted = prompt('what is your favorite kind of pancake');

// prompt will either return a string or null
//  null: if the user clicks "cancel" or presses the "esc" key
//  string: if the user clicks "ok" or uses the "enter" key
//  (it doesn't matter if the user inputs text or not!)
console.log(prompted); // the user's text or null
console.log(typeof prompted); // 'string' or 'object'
```

</details>

### Control Flow

Decide which lines of code to run depending on the values in your program.

You will learn to use control flow with user input to make small text-based programs in the browser.

> hint: use "trace" to study these examples

<details>
<summary>🥚 if</summary>

```js
console.log('-- if --');

let input = prompt("please don't cancel");

if (input === null) {
  // enter this block if the condition is true
  alert('you are a canceler');
}
```

</details>
<details>
<summary>🥚 if else</summary>

```js
console.log('--  if else  --');

let input = prompt("please don't cancel");

if (input === null) {
  // enter this block if the condition is true
  alert('you are a canceler');
} else {
  // enter this block if the condition is false
  alert('thank you for not canceling');
}
```

</details>
<details>
<summary>🥚 if else if else</summary>

```js
console.log('-- if else if else --');

let input = prompt('enter something');

if (input === null) {
  // enter this block if the first condition is true
  alert('you are a canceler');
} else if (input === '') {
  // enter this block if the second condition is true
  alert('come on, type something');
} else {
  // enter this block if all conditions are false
  alert('"' + input + '" is something');
}
```

</details>
<details>
<summary>🥚 while</summary>

```js
console.log('-- while --');

// in the previous examples, we check if the input is not empty
//  but we still keep running the program
// the while loop will let us not go forward until the input is not empty

// explain they keep going while the thing is true

let input = null;

// continue prompting the user until they enter something
//  canceling will return null, this loop will not let you cancel
//  entering without typing anything inputs an empty string, that is allowed
while (input === null) {
  input = prompt('enter something');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 for-of</summary>

```js
console.log('-- for-of --');

/* -- gather user input --*/

let input = null;

while (input === null) {
  input = prompt('enter something');
}

/* -- alert each character of the input --*/

// a for-of loop will go through each character in a string
//  the variable declared in the loop will be assigned one character at a time
//  the first one,
//  then the second,
//  then the third, ...
for (let character of input) {
  alert(character);
}
```

</details>
<details>
<summary>🐣 break</summary>

```js
console.log('-- break --');

/* -- gather user input --*/

let input = null;

while (input === null) {
  input = prompt('enter something with no duplicate characters');
}

/* -- search for duplicate characters --*/

let visited = '';

for (let character of input) {
  let isDuplicate = visited.includes(character);
  if (isDuplicate) {
    // this will leave the loop immediately
    break;
  }
  visited = visited + character;
}

/* -- display the outcome to your user --*/

if (visited.length === input.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
```

</details>
<details>
<summary>🐣 continue</summary>

```js
console.log('-- continue --');

/* -- gather user input --*/

let input = null;

while (input === null) {
  input = prompt('enter something, all the vowels will be removed');
}

/* -- create a copy of the input with all the vowels removed --*/

let vowels = 'aeiouAEIOU';

let withoutVowels = '';

for (let character of input) {
  let isVowel = vowels.includes(character);
  if (isVowel) {
    // this will skip to the next character
    continue;
  }
  withoutVowels = withoutVowels + character;
}

/* -- display the outcome to your user --*/

alert('before: "' + input + '"\n' + 'after: "' + withoutVowels + '"');
```

</details>
<details>
<summary>🐥 while with stepper</summary>

```js
console.log('-- while with stepper --');

let input = null;

while (input === null) {
  input = prompt('please enter something');
}

alert('here are the character in: "' + input + '":');

// index is a "stepper" variable
//  it steps from 0 to a maximum value
let index = 0;
while (index < input.length) {
  let character = input[index];
  alert(character);
  index = index + 1;
}
```

</details>
<details>
<summary>🐥 for loop</summary>

```js
console.log('-- for loop --');

let input = null;

while (input === null) {
  input = prompt('please enter something');
}

alert('here are the character in: "' + input + '":');

// for loops do the same thing as a while loop with a stepper
for (let index = 0; index < input.length; index = index + 1) {
  let character = input[index];
  alert(character);
}
```

</details>

### Numbers

A primitive type used to represent numbers. The programs in this module will be string-based, so there will be very few numbers.

Numbers in JavaScript are challenging to work with and understand, even for experienced developers. You will take a deeper look into numbers in the next module - Debugging.

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof numbers --');

// you write numbers in JS by writing numbers. without quotes
console.log(-1); // -1
console.log(0); // 0
console.log(1); // 1

// the type of numbers is 'number'
console.log(typeof 100); // 'number'
console.log(typeof -100); // 'number'
console.log(typeof 12.3); // 'number'
```

</details>
<details>
<summary>🐣  strict equality</summary>

```js
console.log('-- numbers: strict equality --');

// are two numbers the same?
console.log(1 === 1.0); // true
console.log(12 === 12); // true
console.log(-3.0 === -3); // true

console.log(1 === 1.1); // false
console.log(-12 === 12); // false
console.log(0.3 === 3.0); // false

// comparing with any other type will always be false
console.log(1 === true); // false
console.log(12 === '12'); // false
console.log(0 === null); // false
```

</details>
<details>
<summary>🐣  strict inequality</summary>

```js
console.log('-- numbers: strict inequality --');
// this will always be the opposite of strict equality

// are two numbers different?
console.log(1 !== 1.0); // false
console.log(12 !== 12); // false
console.log(-3.0 !== -3); // false

console.log(1 !== 1.1); // true
console.log(-12 !== 12); // true
console.log(0.3 !== 3.0); // true

// comparing with any other type will always be true
console.log(1 !== true); // true
console.log(12 !== '12'); // true
console.log(0 !== null); // true
```

</details>
<details>
<summary>🐣  relational operators</summary>

```js
console.log('-- relational operators --');

// is the left number bigger than the right one?
console.log(3 > 22); // false
console.log(22 > 3); // true
console.log(1 > 1); // false

// is the left number smaller than the right one?
console.log(3 < 22); // true
console.log(22 < 3); // false
console.log(1 < 1); // false

// is the left number bigger than OR equal to the right one?
console.log(3 >= 22); // true
console.log(22 >= 3); // false
console.log(1 >= 1); // true

// is the left number smaller than OR equal to the right one?
console.log(3 <= 22); // true
console.log(22 <= 3); // false
console.log(1 <= 1); // true
```

</details>
<details>
<summary>🐥 arithmetic</summary>

```js
console.log('-- numbers: arithmetic --');

// adding numbers
console.log(1 + 1); // 2
console.log(-1 + 1); // 0

// subtracting numbers
console.log(3 - 2); // 1
console.log(2 - 3); // -1

// multiplying numbers
console.log(3 * 2); // 6
console.log(3 * 5); // 15

// dividing numbers
console.log(30 / 2); // 15
console.log(12 * 3); // 4
```

</details>
<details>
<summary>🐥 casting to number</summary>

```js
// you will need this to get numbers from a prompt
console.log('-- casting to number --');

// numbers to numbers, no change!
console.log(Number(1)); // 1

// strings to numbers
console.log(Number('')); // 0
console.log(Number('0')); // 0
console.log(Number('1.2')); // 1.2
console.log(Number('-12')); // -12

// boolean to number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// null to number
console.log(Number(null)); // 0
```

</details>
<details>
<summary>🐥 NaN</summary>

```js
console.log('-- NaN --');

// NaN (Not a Number) is a confusing concept in JS
//  for now you only need to use it a little
//  in Debugging you will learn a lot about NaN
// this is everything you need to know for now:

//  strings that don't look like numbers will become NaN
console.log(Number('asdf')); // NaN
console.log(Number('!')); // NaN
console.log(Number('one')); // NaN
console.log(Number('12.3.2')); // NaN

// undefined becomes NaN
console.log(Number(undefined)); // NaN

// nothing is strictly equal to NaN, not even NaN!
console.log(12 === NaN); // false
console.log('hello' === NaN); // false
console.log(NaN === NaN); // false

// you can check for NaN like this:
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('asdf')); // false
```

</details>
<details>
<summary>🐥 numbers: user input (boolean flag)</summary>

```js
console.log('-- numbers: user input --');

// why is userNumber initialized to NaN?
let userNumber = NaN;
while (Number.isNaN(userNumber)) {
  let input = prompt('please enter something');

  if (input === null) {
    // start over if the user entered null
    //  null will cast to 0, not the same as inputting 0
    alert('you are a canceler');
  } else if (input === '') {
    // start over if the user didn't type anything
    //  '' will cast to 0, not the same as inputting 0
    alert('type something');
  } else {
    // cast the not-empty input to type number
    userNumber = Number(input);

    // start over if the input is NaN
    if (Number.isNaN(userNumber)) {
      alert('"' + input + '" is not a number');
      continue;
    }
  }
}

alert(typeof userNumber + ': ' + userNumber);
```

</details>
<details>
<summary>🐥 numbers: user input (break/continue)</summary>

```js
console.log('-- numbers: user input --');

// why is userNumber initialized to NaN?
let userNumber;

while (true) {
  let input = prompt('please enter something');

  // start over if the user entered null
  //  null will cast to 0, not the same as inputting 0
  if (input === null) {
    alert('you are a canceler');
    continue;
  }
  // start over if the user didn't type anything
  //  '' will cast to 0, not the same as inputting 0
  if (input === '') {
    alert('type something');
    continue;
  }

  // cast the not-empty input to type number
  userNumber = Number(input);

  // start over if the input is NaN
  if (Number.isNaN(userNumber)) {
    alert('"' + input + '" is not a number');
    continue;
  }

  // success! if you've made it this far, the user inputed a number
  break;
}

alert(typeof userNumber + ': ' + userNumber);
```

</details>

### Math

The `Math` object in JavaScript has some useful methods you will see in the Welcome to JS examples and exercises. You don't need to master these, but should know what they are doing when you come across them in the code.

<details>
<summary>🐣 .random</summary>

```js
console.log('-- Math.random --');

// generates a random decimal number between 0 and 1
console.log(Math.random()); // ?
console.log(Math.random()); // ?
console.log(Math.random()); // ?
console.log(Math.random()); // ?
console.log(Math.random()); // ?
```

</details>
<details>
<summary>🐣  .round</summary>

```js
console.log('-- Math.round --');

// rounds a decimal number to the nearest integer
console.log(Math.round(0.2)); // 0
console.log(Math.round(0.5)); // 1
console.log(Math.round(0.8)); // 1
console.log(Math.round(1.2)); // 2
console.log(Math.round(1.5)); // 3
console.log(Math.round(1.8)); // 3
```

</details>
<details>
<summary>🐥  all together</summary>

```js
console.log('-- Math.random & Math.round --');

// this is useful for creating random numbers in your programs
//  the example below shows how to create a random number between 0 and 5
let randomDecimal = Math.random();
let decimalTimesFive = randomDecimal * 5;
let randomNumber = Math.round(decimalTimesFive);
console.log(randomNumber); // ?

// or in one line, from 0 -> 5
let randomNumberFromZeroToFive = Math.round(Math.random() * 5);
console.log(randomNumberFromZeroToFive); // ?

// from 1 -> 5
let randomNumberFromOneToFive = Math.round(Math.random() * 4) + 1;
console.log(randomNumberFromOneToFive); // ?
```

</details>
