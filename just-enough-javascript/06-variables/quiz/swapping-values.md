> #todo

# Swapping Values

```js
'use strict'; // line 1

// declare and initialize variables
let a = 'y'; // line 2
let b = 'x'; // line 3
let temp; // line 4

// swap the values stored in `a` and `b`
temp = b; // line 5
b = a; // line 6
a = temp; // line 7
```

## What is the _final_ value of `a`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Nope. `a` never stores the value `undefined` in this program.

`a` is _initialized_ to `"y"` on line 2, and later _reassigned_ to `"x"` on
line 7.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Correct! On line 7 `"x"` is _assigned_ to `a`.

Because this is the last time `a` is _assigned_ a value, `"x"` is the final
value stored in `a`.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Nope. `"y"` is the _initial_ value stored in `a`, but on line 7 `a` is
reassigned a new value.

Because line 7 is the _last time_ `a` is assigned a new value and it is assigned
`"x"`, it's not possible for the final value to be `"y"`.

</details>

## What is the _final_ value of `b`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Nope. `b` never stores the value `undefined` in this program.

`b` is _initialized_ to `"x"` on line 3, and later _reassigned_ to `"y"` on
line 6.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Nope. `"x"` is the _initial_ value stored in `b`, but on line 6 `b` is
reassigned a new value.

Because line 6 is the _last time_ `b` is assigned a new value and it is assigned
`"y"`, it's not possible for the final value to be `"x"`.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Correct! On line 6 `"y"` is _assigned_ to `b`.

Because this is the last time `b` is _assigned_ a value, `"y"` is the final
value stored in `b`.

</details>

## What is the _initial_ value of `temp`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Correct! On line 4 `temp` is _declared_ but not _initialized_, so it's value is
`undefined` by default.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Nope. `temp` is _declared_ but not _initialized_. This means it's initial value
will be `undefined` by default.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Nope. `temp` is _declared_ but not _initialized_. This means it's initial value
will be `undefined` by default.

</details>

## What is the _final_ value of `temp`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Nope. The _initial_ value for `temp` is `undefined`, but on line 5 it is
assigned the value `"x"`.

Because this is the last time that `temp` is _reassigned_, `"x"` is the final
value.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Correct! On line 5 `"x"` is _assigned_ to `temp`.

Because this is the last time `temp` is _assigned_ a value, `"x"` is the final
value stored in `temp`.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Nope. `temp` never stores the value `"y"`. The only two values it stores in this
program are `"x"` and `undefined`.

</details>
