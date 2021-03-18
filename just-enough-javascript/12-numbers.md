## Numbers

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
<summary>🐣 arithmetic</summary>

```js
console.log('-- numbers: arithmetic --');

console.log(' +');
// adding numbers
console.log(1 + 1); // 2
console.log(-1 + 1); // 0

console.log(' -');
// subtracting numbers
console.log(3 - 2); // 1
console.log(2 - 3); // -1

console.log(' *');
// multiplying numbers
console.log(3 * 2); // 6
console.log(3 * 5); // 15

console.log(' /');
// dividing numbers
console.log(30 / 2); // 15
console.log(12 * 3); // 4
```

</details>

<details>
<summary>🐣  relational operators</summary>

```js
console.log('-- relational operators --');

console.log(' >');
// is the left number bigger than the right one?
console.log(3 > 22); // false
console.log(22 > 3); // true
console.log(1 > 1); // false

console.log(' <');
// is the left number smaller than the right one?
console.log(3 < 22); // true
console.log(22 < 3); // false
console.log(1 < 1); // false

console.log(' >=');
// is the left number bigger than OR equal to the right one?
console.log(3 >= 22); // false
console.log(22 >= 3); // true
console.log(1 >= 1); // true

console.log(' <=');
// is the left number smaller than OR equal to the right one?
console.log(3 <= 22); // true
console.log(22 <= 3); // false
console.log(1 <= 1); // true
```

## </details>

## Math

The `Math` object in JavaScript has some useful methods you will see in a couple Welcome to JS examples and exercises. You don't need to master these, but should know what they are doing when you come across them in the code.

<details>
<summary>🐣  .round</summary>

```js
console.log('-- Math.round --');

// rounds a decimal number to the nearest integer
console.log(Math.round(0.2)); // 0
console.log(Math.round(0.5)); // 1
console.log(Math.round(0.8)); // 1
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.8)); // 2
```

</details>
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
<summary>🐥  all together</summary>

```js
console.log('-- Math.random & Math.round --');

console.log('random from 0 -> 5');
// this is useful for creating random numbers in your programs
//  the example below shows how to create a random number between 0 and 5
let randomDecimal = Math.random();
let decimalTimesFive = randomDecimal * 5;
let randomNumber = Math.round(decimalTimesFive);
console.log(randomNumber); // ?

// or in one line
let randomNumberFromZeroToFive = Math.round(Math.random() * 5);
console.log(randomNumberFromZeroToFive); // ?

console.log('random from 1 -> 5');
let randomNumberFromOneToFive = Math.round(Math.random() * 4) + 1;
console.log(randomNumberFromOneToFive); // ?
```

</details>
