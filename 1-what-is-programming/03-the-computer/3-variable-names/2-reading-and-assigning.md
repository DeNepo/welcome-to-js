# Reading And Assigning Variables

This set of programs will be more complicated to understand, now that we're
reading and assigning variables so you will need to think about each program
from 3 different perspectives:

1. **Computer Instructions**: What is each program's trace? When and where is
   each variable read? assigned?
2. **Final Value**: What is the final value of `pattern`? Different instructions
   can lead to the same final value!
3. **Variable Names**: What names were used for the variables? Remember,
   variable names and computer instructions are separate things! Variables help
   the developer understand what is happening, but do not change the computer's
   instructions.

Study the programs on this page to find all of the pairs:

- _same final value_ and _same instructions_
- _same final value_ and _different instructions_
- _same variable names_ and _different final value_
- _different variable names_ and _same instructions_
- _different variable names_ and _different instructions_
- _different variable names_ and _different final value_
- _different instructions_ and _different final value_

<details>
<summary>hints</summary>

- run the programs and read the logs
- use the "variables" button and hover over each variable
- use the "highlight" button and mark each variable in a different color
- step through the programs in JS Tutor to watch how memory is updated

</details>

---

<details>
<summary>program 1</summary>

```js
'use strict';

console.log('program 1');

let a = '.';
let b = '@';
let c = '';

c = b + a + b + a;
c = a + c + b + a;
c = a + b + c + b;
c = a + b + c + a;

console.log(c);
```

</details>

<details>
<summary>program 2</summary>

```js
'use strict';

console.log('program 2');

let dot = '.';
let at = '@';
let pattern = '';

pattern = at + at + pattern + dot;
pattern = at + pattern + dot + dot;
pattern = at + at + pattern + dot;
pattern = at + pattern + dot + dot;

console.log(pattern);
```

</details>

<details>
<summary>program 3</summary>

```js
'use strict';

console.log('program 3');

let dot = '.';
let at = '@';
let pattern = '';

pattern = at + dot + at + dot;
pattern = dot + pattern + at + dot;
pattern = dot + at + pattern + at;
pattern = dot + at + pattern + dot;

console.log(pattern);
```

</details>

<details>
<summary>program 4</summary>

```js
'use strict';

console.log('program 4');

let a = '.';
let b = '@';
let c = '';

c = a + b + a + b;
c = c + a + b + a;
c = a + b + c + b;
c = c + a + b + a;

console.log(c);
```

</details>

---

<details>
<summary>answers</summary>

- _same final value_ and _same instructions_
  - 1 & 3
- _same final value_ and _different instructions_
  - 1 & 4
  - 3 & 4
- _same variable names_ and _different final value_
  - 2 & 3
- _different variable names_ and _same instructions_
  - 1 & 3
- _different variable names_ and _different instructions_
  - 1 & 2
  - 4 & 2
- _different variable names_ and _different final value_
  - 1 & 2
  - 4 & 2
- _different instructions_ and _different final value_
  - 1 & 2
  - 3 & 2
  - 4 & 2

</details>
