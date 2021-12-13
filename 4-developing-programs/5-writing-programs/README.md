# Writing

It's time! Practice writing some programs of your own.

There are different levels of exercise in this folder, each with less support:

0. **Stepped Examples**: These examples show each step of the incremental
   writing process. Don't skip these before moving on!
1. **Starter Code**: These exercises will give you behavior, goals and some
   starter code. You need to complete the code to implement the behavior
   described by the specs.
2. **Specs and Goals**: These exercises will have specs and labeled goals, but
   not starter code. You need to write all the code from scratch.
3. **Only Specs**: The final set of exercises will only give you the program
   specs, you need to come up with your own goals and your own code!

Some of the programs you will write are a lot like ones you studied in previous
chapters. No problem, just find a different way to write the same program
behavior!

---

## One Goal at a Time

The easiest way write a program is to work in small steps, running the code
every time you make a change to make sure it does what you expect. Planning your
development around program goals is the key to structuring these small steps.

A good strategy to write a program is thinking about what data you will need in
_the next goal_. Thinking of the data you need later will helps you understand
what to write now.

So what's a good process for writing a program? It might look something like
this:

### 0. Understand the Behavior

Carefully read the user stories and test cases to understand what data goes in,
what data comes out, and what should happen to the data.

<details>
<summary>expand for example code</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/
```

</details>

---

### 1. Plan your Goals

What are the important steps in transforming the input data to the final output
data?

Take some extra time to think about what data should come into each goal, and
what data should leave each goal. That's right, you can think of each goal as a
small program inside your program!

<details>
<summary>expand for example code</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user inputs

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

---

### 2. Write -> Predict -> Check -> Repeat

It's tempting to jump in and try writing the whole program at once, this feels
faster at first but will actually slow you down. The more code you write the
harder it is to understand the more mistakes you can make.

The best approach is to write a small amount of code, predict what it will do,
then run the code and check. If it didn't do what you expected then make another
small change and check again. Don't move on to the next line until the one
you're working on does _exactly_ what you expect it will!

Here is an example of what it might look like to write and check the code for
one goal:

<details>
<summary>goal 1, try 1: the loop never executes</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

// the initial value is not null, so the loop never executes
let input = '';
while (input === null) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

<details>
<summary>goal 1, try 2: the loop still never executes</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

let input = null;
// oops,  used an assignment operator instead of a comparison
while ((input = null)) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

<details>
<summary>goal 1, try 3: got it!</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

let input = null;
while (input === null) {
  input = prompt('enter something');
  //  Data In:  a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

---

### 3. One Goal At a Time

Follow the same process (_Write -> Predict -> Check -> Repeat_) for each goal in
your program until you think the full program is ready.

Notice that the _Data After_ one goal is the _Data Before_ the next goal!

<details>
<summary>goal 1: get a string from the user</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

let input = null;
while (input === null) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

<details>
<summary>goal 2: make the input excited</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

let input = null;
while (input === null) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */

//  Data Before:  the user's string
let output = input + '!';
//  Data After:   the same string with an exclamation mark
console.log(output);

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

<details>
<summary>goal 3: display the excited string to the user</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

let input = null;
while (input === null) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */

//  Data Before:  the user's string
let output = input + '!';
//  Data After:   the same string with an exclamation mark
console.log(output);

/* --- display the string to the user --- */

//  Data Out:  an excited string
alert(output);
```

</details>

---

### 4. Test the Program

When you think the program is finished, it's time to test it. Run the program
with each of the test cases making sure that the correct output is displayed for
each input.

Writing extra test cases can help you understand the program and be confident
that it works as expected.

<details>
<summary>even more test cases</summary>
<br />

```js
'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
    '123'   -> '123!'
    '..!!..'  -> '..!!..!'
    'HYF'   -> 'HYF!'
    'HYF!!' -> 'HYF!!!'
*/

/* --- get a string from the user --- */

let input = null;
while (input === null) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */

//  Data Before:  the user's string
let output = input + '!';
//  Data After:   the same string with an exclamation mark
console.log(output);

/* --- display the string to the user --- */

//  Data Out:  an excited string
alert(output);
```

</details>

If your program does what it should, great! If it doesn't, then it's time to
start ...

---

### 5. Debugging

If your code doesn't do what it's supposed to, then you've got a bug.

Some bugs are easy to fix, maybe you just used the wrong variable or flipped
your `if`/`else` blocks. But other bugs can be hard to find and fix.

Learning to carefully identify and fix bugs in a program is not an easy skill to
develop. It comes after lots of practice and experience.
