# User Interactions

Logging is for developers, Interactions are for Users. JavaScript in the browser has 3 ways to do basic user interactions. They don't create the best user experience but they are practical for learning to program.

Learning to use these 3 functions will help you to understand primitive types and values. Each interaction is a _function_ (you'll learn more about functions in Debugging). Functions _return_ a value, meaning that you can use them to assign a value to a variable. But each interaction returns a _different_ type.

Tracing this example and see if you can figure out what type each interaction returns (`boolean`, `string`, `null`, or `undefined`)

```js
console.log('-- user interactions --');

let input = null;
while (input === null) {
  input = prompt('enter something');
}

let didConfirm = confirm('is this correct?\n\n "' + input + '"');
if (didConfirm) {
  alert('yes!');
} else {
  alert('no :(');
}
```

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

// run this example a few times in the console. what happens if you:
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
