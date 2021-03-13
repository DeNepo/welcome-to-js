# While Loops

While loops allow you to write a block of code that will repeat _while_ a condition is true. The condition in a while loop is very similar to a conditional, if the value in the parenthesis is true the block of code will be executed.

The major difference between a while loop and a conditional is that a conditional will only test the value once. A while loop will test the value as many times as necessary until it is false.

```js
console.log('-- while --');

let input = null;

let inputIsNull = true;
while (inputIsNull) {
  input = prompt('do not cancel');

  inputIsNull = input === null;
}

alert(input + '!');
```

<details>
<summary>🥚 while null</summary>

```js
console.log('-- while null --');

let input = null;

// continue prompting the user until they enter
//  an empty string is ok, because it is not canceling
while (input === null) {
  input = prompt('do not cancel');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 while null or empty string</summary>

```js
console.log('-- while null or empty string --');

let input = null;

// continue prompting the user until they enter something
//  an empty string is not allowed!
while (input === null || input === '') {
  input = prompt('enter something');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 while not "bread"</summary>

```js
console.log('-- while not "bread" --');

let input = null;

// continue prompting the user until they enter "bread"
//  this loop is different because it finishes when the user's input IS a specific value
//  the other loops ended when the user's input was NOT a specific value
while (input !== 'bread') {
  input = prompt('enter "bread"');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 while not "bread" and not "water"</summary>

```js
console.log('-- while not "bread" or "water" --');

let input = null;

// continue prompting the user until they enter "bread" or "water"
//  notice that this example use !== with &&, but the previous used === with ||
while (input !== 'bread' && input !== 'water') {
  input = prompt('enter "bread" or "water"');
}

alert(input + '!');
```

</details>
