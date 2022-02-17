# Writing

Finally, writing some code!

In these exercises you will be given a program with some missing lines and a
description of the code you should write to complete the program.

An exercise will look like this before you finish it:

```js
'use strict';

let input = prompt('please do not cancel');

let message = '';

/*
  Write a conditional check to see if the input is an empty string.

  keyword:
  check
    identifier:
    operator:
    primitive:
*/


___
  alert('you canceled :(');
} else {
  alert('thank you for your input: ' + input);
}
```

And like this after you finish it (_hint. the format button is helpful_):

```js
'use strict';

let input = prompt('please do not cancel');

let message = '';

/*
  Write a conditional check to see if the input is an empty string.

  keyword: if
  check
    identifier: input
    operator: ===
    primitive: ''
*/

if (input === '') {
  alert('you canceled :(');
} else {
  alert('thank you for your input: ' + input);
}
```
