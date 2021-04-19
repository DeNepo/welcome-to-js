# Conditionals

> mention 'test'

```js
console.log('-- conditionals --');

let isLeftHanded = confirm('are you left handed?');

if (isLeftHanded) {
  alert('you are left handed');
} else {
  alert('you are not left handed');
}
```

<details>
<summary>🥚 if</summary>

```js
console.log('-- if --');

let input = prompt("please don't cancel");

let response = '';
if (input === null) {
  // enter this block if the condition is true
  response = 'you are a canceler';
}

alert(response);
```

</details>
<details>
<summary>🥚 if else</summary>

```js
console.log('--  if else  --');

let input = prompt("please don't cancel");

let response = '';
if (input === null) {
  // enter this block if the condition is true
  response = 'you are a canceler';
} else {
  // enter this block if the condition is false
  response = input;
}

alert(response);
```

</details>
<details>
<summary>🥚 if else if else</summary>

```js
console.log('-- if else if else --');

let input = prompt('enter something');

let response = '';
if (input === null) {
  // enter this block if the first condition is true
  response = 'you are a canceler';
} else if (input === '') {
  // enter this block if the second condition is true
  response = 'come on, type something';
} else {
  // enter this block if all conditions are false
  response = '"' + input + '" is something';
}

alert(response);
```

</details>

---

## Execution Paths

Code using conditionals has more than one _execution path_. An execution path is simply the specific lines of code that are executed when you run the program. The more conditionals the more paths, the more paths the more difficult it can be to understand what a program does.

There can be many different . Using the `trace` button will help you understand a program's execution path for different inputs.

<details>
<summary>🥚 2 paths: if else</summary>

```js
console.log('-- 2 paths: if else --');

let input = prompt('enter something');

let path = '';
if (input === null) {
  path = 'a';
} else {
  path = 'b';
}

alert(path);
```

</details>
<details>
<summary>🥚 3 paths: if else if else</summary>

```js
console.log('-- 3 paths: if else if else --');

let input = prompt('enter something');

let path = '';
if (input === null) {
  path = 'a';
} else if (input === '') {
  path = 'b';
} else {
  path = 'c';
}

alert(path);
```

</details>
<details>
<summary>🥚 4 paths: nested</summary>

```js
console.log('-- 4 paths: nested --');

let input = prompt('enter "something"');

let path = '';
if (input !== null) {
  path = 'a';
  if (input === '') {
    path = path + '1';
  } else if (input === 'something') {
    path = path + '2';
  } else {
    path = path + '3';
  }
} else {
  path = 'b';
}

alert(path);
```

</details>

---

## Nested Conditionals

Programs with more execution paths are more complex to understand, but can also have a more interesting user experience. One way to write more interesting programs is to use _nested conditionals_ (conditionals inside of conditionals)

<details>
<summary>🥚 memory game</summary>

```js
console.log('-- memory game --');

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win'
);

if (thingToRemember !== null) {
  let displayTheString = confirm(
    'would you like to see your text one more time?'
  );
  if (displayTheString) {
    alert(thingToRemember);
  }
  let guess = prompt('now try to remember what it was:');
  if (guess !== null) {
    if (guess === thingToRemember) {
      alert('you win!');
    } else {
      alert('try again.');
    }
  }
}

alert('good bye');
```

</details>
