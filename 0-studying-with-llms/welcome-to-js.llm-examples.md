# Welcome to JS: LLM Examples

This document has example programs to give LLMs inspiration when helping
learners study Welcome to JS.

It is helpful to use scaffolding: start with extremely simple programs and
plenty of explanatory comments, then gradually introduce more complexity and
less support as the learner progresses.

## Fill in the Blanks

This program demonstrates using `_` in the code as an exercise for learners. You
can also use letters in the blanks and ask specific questions about each blank.

```javascript
'use strict';

// --- __goal?__ ---

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

// --- __goal?__ ---

let keepLetters = __A__(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

// --- __goal?__ ---

let newPhrase = '';
if (__B__) {
  // --- __goal?__ ---

  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let character of __C__) {
    if (letters.__D__(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  // --- __goal?__ ---

  for (let character of phrase) {
    __E__ = newPhrase + character + character;
  }
}

// --- __goal?__ ---
alert(newPhrase);
```

Comprehension questions:

- Which interaction belongs in **A**? How can you tell?
- What happens if the user cancels the prompt in **A**? How does the program
  respond?
- Which variable belongs in **B**? What type does it store? How can you tell?
- Which variable belongs in **C**? Where does its value come from?
- Is it possible to know from the source code how many times the program will
  loop over **C**?
- What method belongs in **D**? Why is the string changed to lowercase before?
- Which variable belongs in **E**? What role does this variable have?

## Refactoring

```javascript
'use strict';

// What strategy can replace the need for continue?
// How might you redesign the loop to avoid this keyword entirely?

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';

for (let character of toBeFrogged) {
  if (character === 'f') {
    frogged = frogged + 'frog';
    continue;
  }
  if (character === 'F') {
    frogged = frogged + 'FROG';
    continue;
  }
  frogged = frogged + character;
}

alert(frogged);
```

## Modifying

```javascript
'use strict';

// How could you modify this program so it checks that user input is SHORTER than a specific limit?

let limit = 5;

let phrase = '';

let longEnough = false;
while (!longEnough) {
  phrase = prompt('enter anything longer than ' + limit + ' characters');

  if (phrase === null) {
    alert('there is no escape');
  } else if (phrase.length <= limit) {
    alert('too short');
  } else {
    longEnough = true;
  }
}

alert('"' + phrase + '" is ' + phrase.length + ' characters long');
```

## Naming Variables

```javascript
'use strict';

let __A__ = null;
while (__A__ === null) {
  __A__ = prompt('enter some text, each character will be repeated');
}

let __B__ = '';
for (let __C__ of __A__) {
  __B__ = __B__ + __C__ + __C__;
}

alert(__A__ + ' -> ' + __B__);
```

Comprehension questions:

- What is this program's behavior?
- What would be a good name for each variable?

## Users Stories + Test Cases + Review Checklist

As learners progress you can also start to discuss user stories, test cases and
code review checklists. Because the programs are simple it's enough to use
formatted comments for these - Welcome to JS does not use any libraries for
testing but does use ESLint.

```javascript
'use strict';

/* Magic Mirror

  a user can input a non-empty string and only the letters will be turned into a mirror
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the mirrored letters will be displayed

  test cases:
    only letters:
      'abc' -> 'abc|cba'
      'hello' -> 'hello|olleh'
      'JavaScript' -> 'JavaScript|tpircSavaJ'
    only not-letters:
      '.(-).' -> '|'
      '-=>|<=-' -> '|'
      '. - ^ - .' -> '|'
    mixed letters and not-letters:
      'hello!' -> 'hello|olleh'
      'good bye?' -> 'goodbye|eybdoog'
      'let input = ""' -> 'letinput|tupnitel'
*/

// ... code goes here ...

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
```

## DOM I/O + jeJS

```HTML
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Repeatext (dom io example)</title>
    <link href="./index.css" rel="stylesheet" />
  </head>
  <body>
    <div>
      <form id="repeaty">
        <label>repeat this: <input id="to-repeat" type="text" /></label>
        <br />
        <label>
          this many times: <input id="repeats" type="number" value="1"
        /></label>
        <br />
        <label><input id="loud" type="checkbox" /> upper case</label>
      </form>
      <hr />
      <pre id="out" class="computery"></pre>
    </div>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

```css
/* index.css */
.computery {
  font-family: monospace;
  color: chartreuse;
  background-color: black;
}
```

```javascript
// index.js
import {
  whenFormDataChanges,
  readString,
  readBoolean,
  readNumber,
  displayString,
} from '../dom-io.js';

whenFormDataChanges('repeaty', () => {
  // debugger;

  // --- read user input ---
  const text = readString('to-repeat');
  const repetitions = readNumber('repeats');
  const screaming = readBoolean('loud');

  // --- repeat the string input ---
  let repeated = '';
  while (repeated.length < text.length * repetitions) {
    repeated = repeated + text;
  }

  // --- set to upper or lower case ---
  let finalText = '';
  if (screaming) {
    finalText = repeated.toUpperCase();
  } else {
    finalText = repeated.toLowerCase();
  }

  // --- display the final text ---
  displayString('out', finalText);
});
```
