# Variables

Variables allow you to save values to use later in your program.

They're kind of like a box that can only hold one thing at a time.

```js
let iAm = 'a variable';
console.log(iAm);
```

<details>
<summary>🥚 declare, initialize, assign</summary>

```js
console.log('-- declare, initialize, assign --');

// declare a value and initialize it's value
let favoriteTree = 'palm';
console.log(favoriteTree); // 'palm'

// assigning a different value
favoriteTree = 'oak';
console.log(favoriteTree); // 'oak'

// declare variable with an initial value
let bread = 'fresh';
console.log(bread); // 'fresh'

// re-assign the initialized variable
bread = 'stale';
console.log(bread); // 'stale'
```

</details>
<details>
<summary>🥚 uninitialized variables</summary>

```js
console.log('-- uninitialized variables --');

// declaring a variable without an initial value
//  it will be initialized to undefined by default
let uninitialized;
console.log(uninitialized); // undefined
console.log(typeof uninitialized); // 'undefined'

// initializing a variable to undefined does exactly the same thing
let initialized = undefined;
console.log(initialized); // undefined
console.log(typeof initialized); // 'undefined'
```

</details>

---

## Using Variables

Variables are relatively simple, they store a value and that value can change. What becomes more challenging is understanding how to use variables in a program.

Below is a few examples of what you can do with variables, the [naming-variables](../naming-variables) exercises go into more depth on the different ways you can use a variable in your programs.

<details>
<summary>🥚 different types</summary>

```js
console.log('-- variables: different types --');
// variables can store any type
//  and you can change the types all you want

// declare and assign a boolean value
let variable = true;
console.log(typeof variable); // 'boolean'

// assign a string to the variable
variable = 'computers';
console.log(typeof variable); // 'string'

// assign undefined to the variable
variable = undefined;
console.log(typeof variable); // 'undefined'

// and another boolean
variable = false;
console.log(typeof variable); // 'boolean'
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
let car = 'vrooom';
let loudCar = car.toUpperCase();
let excitedCar = loudCar.replaceAll('O', '!');
console.log(excitedCar); // 'VR!!!M'

// use a string stored in a variable as an argument
let oldLetter = 'f';
let newLetter = 'd';
let happyAnimal = 'fog'.replaceAll(oldLetter, newLetter);
console.log(happyAnimal); // 'dog'

// all together
let characterName = '  harry potter   ';
let trimmedName = characterName.trim();

let bookTitle = 'Harry Potter and the Magical Thing';
let titleLowerCase = bookTitle.toLowerCase();

let includesName = titleLowerCase.includes(trimmedName);
console.log(includesName); // true
```

</details>

---

## Two Common Errors

Programming languages have strict about what you can and cannot do. Here are two errors you will make quite a bit when you start your own [explorations](../explorations), even a spelling mistake can cause these errors!∂

You may get different error messages depending on which browser you are using, but they mean the same thing. In Debugging we will go much deeper into interpreting and correcting program errors.

<details>
<summary>🥚 not declaring a variable</summary>
<br>

Using a variable that has not been declared will throw an error (when you're in strict mode, but that's a story for another day. All the exercises in this repo are run in strict mode).

```js
console.log('-- not declaring 1 --');

// let animal; // uncomment this line to fix the error
animal = 'horse'; // ReferenceError
```

```js
console.log('-- not declaring 2 --');

// a common mistake is spelling your variables incorrectly
let spellingMistake = 'oops!';
console.log(spelingMistake); // ReferenceError
```

</details>
<details>
<summary>🥚 declaring a variable twice</summary>
<br>

Declaring a variable tells JavaScript to prepare a place in memory with that name. Trying to create two spaces in memory with the same name will cause an error.

- Chrome & Chromium-based browsers: `SyntaxError: Identifier '_' has already been declared`
- Firefox: `SyntaxError: redeclaration of let _`

```js
// ! this log never happens !
//  syntax errors happen before the program runs
//  so no single line of code will happen
//  you will learn more about program life cycle in Debugging
console.log('-- declaring twice --');

let vegetable = 'carrot';
let vegetable = 'potato'; // SyntaxError
```

</details>
