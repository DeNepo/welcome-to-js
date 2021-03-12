# Using Numbers

Using numbers in JS programs is not simple, experienced developers will even have trouble with JS numbers. You will study numbers in depth with the Debugging module. Once you master numbers you will have a good insight into how the type system in JavaScript works, and programming is all about types!

---

## Casting to Number

Remember types? It's possible to change values from one type to another. Casting to `"number"` is important but also often the cause of bugs in a program. You need to watch out for `NaN`.

<details>
<summary>🐥 Number</summary>

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

// NaN is ... a number!?
console.log(NaN); // NaN
console.log(typeof NaN); // 'number'

//  strings that don't look like numbers will become NaN
console.log(Number('asdf')); // NaN
console.log(Number('!')); // NaN
console.log(Number('one')); // NaN
console.log(Number('12.3.2')); // NaN

// undefined becomes NaN
console.log(Number(undefined)); // NaN
```

</details>
<details>
<summary>🐥 Number.isNaN</summary>

```js
console.log('-- checking for NaN --');

// nothing is strictly equal to NaN, not even NaN!
console.log(12 === NaN); // false
console.log('hello' === NaN); // false
console.log(NaN === NaN); // false

// you can check for NaN like this:
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('asdf')); // false
```

</details>

---

## User Numbers

If you want users to input a number, you will need to convert strings to numbers. This is because there is no browser interaction that allows users to directly input values of type `"number"`. This is true now with `prompt`/`alert`/`confirm`, but also with the DOM.

<details>
<summary>🐥 boolean flag</summary>

```js
console.log('-- user numbers: boolean flag --');

// why is userNumber initialized to NaN?
let userNumber = NaN;

let inputIsNaN = true;
while (inputIsNaN) {
  let input = prompt('please enter something');

  if (input === null) {
    // start over if the user entered null
    //  null will cast to 0, not the same as inputting 0
    alert('you are a canceler');
  } else if (input === '') {
    // start over if the user didn't type anything
    //  '' will cast to 0, but is not the same as inputting 0
    alert('type something');
  } else {
    // cast the not-empty input to type number
    userNumber = Number(input);

    // check if the input is NaN
    inputIsNaN = Number.isNaN(userNumber);

    // alert the user if it was not a number
    if (inputIsNaN) {
      alert('"' + input + '" is not a number');
    }
  }
}

alert(typeof userNumber + ': ' + userNumber);
```

</details>
<details>
<summary>🐥 true, break, continue</summary>

```js
console.log('-- user numbers: true, break, continue --');

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
