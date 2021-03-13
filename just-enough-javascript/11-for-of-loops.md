# `for-of`

The `for-of` loop is a convenient syntax for reading one character from a string at a time. You will declare a variable in the loop head and it will be assigned each character, one after the other.

The loop body will be executed once for each character in the string so you can use the variable to do whatever you like.

```js
console.log('-- for-of --');

let input = null;
while (input === null) {
  input = prompt('enter something');
}

for (let character of input) {
  alert(character);
}

// input has not been changed!
alert(input);
```

---

## Using `for-of`

Understanding how a `for-of` loop works is not so difficult, but using them in a program can get tricky. Programs that use _iteration_ can be difficult to understand, even for experienced programmers!

Here are a few small programs to give you an idea of what's possible.

<details>
<summary>🥚 reverse a string</summary>

```js
console.log('-- for-of: reverse a string --');

let input = null;
while (input === null) {
  input = prompt('enter something');
}

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
}

alert(input + ' -> ' + reversed);
```

</details>
<details>
<summary>🥚 remove vowels</summary>

```js
console.log('-- for-of: remove vowels --');

let input = null;
while (input === null) {
  input = prompt('enter something, all vowels will be removed');
}

let noVowels = '';
for (let character of input) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;
}

alert(input + ' -> ' + noVowels);
```

</details>
<details>
<summary>🥚 check for vowels</summary>

```js
console.log('-- for-of: check for vowels --');

let input = null;
while (input === null) {
  input = prompt(
    'enter something, the program will check if it has any vowels'
  );
}

let hasVowels = false;
for (let character of input) {
  if ('aeiouAEIOU'.includes(character)) {
    hasVowels = true;
    break;
  }
}

if (hasVowels) {
  alert('"' + input + '" has vowels');
} else {
  alert('"' + input + '" does not have vowels');
}
```

</details>
