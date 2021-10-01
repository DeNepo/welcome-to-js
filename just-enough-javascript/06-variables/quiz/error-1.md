> #todo

# Error 1

```js
'use strict'; // line 1

let animal = 'dog'; // line 2

console.log(animal); // line 3

let animal = 'cat'; // line 4
```

## Which error will be thrown by this code?

<details>
<summary><strong>A. SyntaxError</strong></summary>
<br>

Correct! Declaring two variables with the same name is a _SyntaxError_.

This error is caught in _creation phase_, the program will not even start
running. (you'll learn more about this in Debugging)

</details>
<details>
<summary><strong>B. ReferenceError</strong></summary>
<br>

Nope. _ReferenceErrors_ happen when you try to use a variable that was never
declared.

The problem here is that the variable was declared twice.

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

Nope. The first time you declared the variable `animal` everything is ok, you
can always declare a variable once.

</details>
<details>
<summary><strong>C. line 3</strong></summary>
<br>

Nope. This line is never actually executed!

Because the _SyntaxError_ occurs **before** the program actually runs (creation
phase), the value stored in `animal` is never logged.

</details>
<details>
<summary><strong>D. line 4</strong></summary>
<br>

Correct! The error occurs on _line 4_ because this is where `animal` is declared
for the **second** time.

Declaring the same variable twice will cause an error. (unless they're in
different _scopes_, more on this in a few chapters.)

</details>
