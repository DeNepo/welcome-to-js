> #todo

# Error 2

```js
'use strict'; // line 1

animal = 'dog'; // line 2

console.log(animal); // line 3

animal = 'cat'; // line 4
```

## Which error will be thrown by this code?

<details>
<summary><strong>A. SyntaxError</strong></summary>
<br>

Nope. A _SyntaxError_ occurs with `let` when you try to declare the same
variable more than once.

In this snippet `animal` is only declared once, so that's not the problem.

</details>
<details>
<summary><strong>B. ReferenceError</strong></summary>
<br>

Yup! This is a _ReferenceError_ because you are trying to use the variable
`animal` while it was never declared in the program.

</details>

## On which line will the error occur?

<details>
<summary><strong>A. line 1</strong></summary>
<br>

Nope. Line 1 is the `"use strict";` directive, it changes the way JS interprets
your code but it's not a _step_ in your program.

Errors will never occur on the `"use strict";` line.

</details>
<details>
<summary><strong>B. line 2</strong></summary>
<br>

Correct! On line 2 the `animal` is _read_, but `animal` is never _declared_.
Reading a variable before it is declared will cause a _ReferenceError_.

</details>
<details>
<summary><strong>C. line 3</strong></summary>
<br>

Nope. The error occurs earlier in the program so the program will never reach
line 3.

</details>
<details>
<summary><strong>D. line 4</strong></summary>
<br>

Nope. The error occurs earlier in the program so the program will never reach
line 4.

</details>
