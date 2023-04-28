# Errors

When something is wrong in your code that causes the program to stop.

---

## Program Life-Cycle

When you run a program, there are actually two phases that happen behind the
scenes:

1. **Creation Phase**: The JS interpreter will "read" (parse) your code and
   prepare the environment to execute your program.

2. **Execution Phase**: Actually following your instructions, executing your
   program one step at a time.

---

## Describing Errors

To search or ask for help when you have an error, you need to know how to
describe the error:

- **Environment**: Node + version? Browser? Which browser?

- **Name**: The error's name logged in the console.

- **Message**: The error's message logged in the console.

- **Location**: The line & column where your error occurred.

- **Life-Cycle**: Did it occur during creation or execution?

---

## Searching Errors Online

When searching for help online, you want to use the information that is not
specific to _your_ program. This includes:

- **Environment**: Node + version? Browser? Which browser?

- **Name**: The error's name logged in the console.

- **Message**: The error's message logged in the console.

---

## Finding Error Locations

To find where an error occurred in your debugger, click on the link to the right
of the error message in your console:

```js
'use strict';

console.log('--- in execution phase ---');

let x = 1;

let x = 2;
```

---

## Pausing on Errors

You can also configure your devtools to pause on errors by clicking the stop
sign in the upper right corner of your debugger. This will show you which values
were in memory when the error occurred:

```js
'use strict';

console.log('--- in execution phase ---');

let input = 6;

for (let i of input) {
  console.log(i);
}
```

---

## Mistakes vs. Errors

When fixing errors it's important to tell the difference between the _error_ in
your program and the _mistake_ in your code. Often the error will be on a
different line than your mistake:

```js
'use strict';

console.log('--- in execution phase ---');

// mistake: assigning null to input
let input = null;

// error: accessing .length of null
if (input.length < 5) {
  console.log('too short');
} else {
  console.log('perfect');
}
```

---

## Fixing Errors

Fixing errors is not as simple as making the code run! Sometimes there will be
more than one way to fix an error, choosing the best option will take practice
and experience:

```js
'use strict';

console.log('--- in execution phase ---');

/*
  should the second variable be named `y`?
  or should there only be one variable: `x = 2`?
*/

let x = 1;

let x = 2;
```

---

## The Exercises

There is bunch of code with errors. Practice finding the errors in the debugger,
describing the errors, and fixing them. You will use this comment to organize
your notes:

```js
/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake:

  the fix(es):
*/
```
