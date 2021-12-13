# Welcome to JS

> The best authors and the best JavaScript developers are those who obsess about
> language, who explore and experiment with language every day and in doing so
> develop their own style, their own idioms, and their own expression.
>
> — [Angus Croll](https://anguscroll.com/),
> [If Hemingway Wrote JavaScript](https://anguscroll.com/hemingway/)

Take your first steps into programming by learning to read, trace, and analyze,
and write interactive programs in your browser.

- [Learning Objectives](#learning-objectives): what you can expect to learn from
  studying this material
- [Setting Up](#setting-up): how to set up and study this material
- [Study Path](#study-path): An introduction to the chapters in this repo and
  the best way to work your way through them.
- [Suggested Study](./suggested-study.md): Helpful links for this module, useful
  but not required.
- [Study Tips](./study-tips.md): Some tips for getting the most out of your time
  learning to program.

---

## Learning Objectives

<details>
<summary>expand/collapse</summary>
<br>

> all of these skills are limited to short, single-page programs written with
> **Just Enough JavaScript**

<details>
<summary>Priorities: 🥚, 🐣, 🐥, 🐔 (click to learn more)</summary>
<br>

There is a lot to learn in this repository. If you can't master all the material
at once, that's expected! Anything you don't master now will always be waiting
for you to review when you need it. These 4 emoji's will help you prioritize
your study time and to measure your progress:

- 🥚: Understanding this material is required, it covers the base skills you'll
  need for this module and the next. You do not need to finish all of them but
  should feel comfortable that you could with enough time.
- 🐣: You have started all of these exercises and feel you could complete them
  all if you just had more time. It may not be easy for you but with effort you
  can make it through.
- 🐥: You have studied the examples and started some exercises if you had time.
  You should have a big-picture understanding of these concepts/skills, but may
  not be confident completing the exercises.
- 🐔: These concepts or skills are not necessary but are related to this module.
  If you are finished with 🥚, 🐣 and 🐥 you can use the 🐔 exercises to push
  yourself without getting distracted from the module's main objectives.

---

</details>

- [ ] 🥚 **Three Audiences**: You can explain how a single file of code is used
      to communicate with 3 different audiences:
  - **Developers**: You can explain how code formatting, comments, logs and
    variable names make it easier (or harder!) for a developer to understand a
    program.
  - **Computers**: You can explain how a computer follows your instructions to
    store, read and modify data in program memory.
  - **Users**: You can explain how the computer creates a dynamic user
    experience by following different executions paths depending on user input.
- [ ] 🥚 **Listening and Reading**: You can read code out loud, and understand
      your classmates when they read code to you. You don't need to understand
      how a program works to master these learning objectives!
  - **Listening** You can exactly re-write a program that a classmate has read
  - **Reading** You can read a program out loud and guide your classmates to
    re-write _exactly_ the same code without them seeing the program. \(every
    indentation, semi-colon, comment and spelling must be identical\) to you,
    without seeing the program they are reading.
- [ ] 🥚 **Static vs. Dynamic Analysis**: You can explain and use these two ways
      of studying a program, each can help you understand different aspects of
      your code. To help understand this concept, the _options_ panel in Study
      Lenses is organized into _static_ and _dynamic_ study options:
  - **Static**: Studying the text in a code file _without_ running it. Some
    static study methods are creating a flowchart, analyzing variables, filling
    out a trace table, and drawing on code.
  - **Dynamic**: _Running_ code and studying the computer's behavior. Some
    dynamic study methods are running code and reading console logs, using the
    _trace_ button, and stepping through in the debugger or JS Tutor.
- [ ] 🥚 **Analyzing Variables**: You can list all the variables in a program,
      and answer these 5 questions for each variable:
  - _Where is the variable declared?_
  - _What is the variable's scope?_
  - _Is the variable initialized with a value?_
  - _How many times is it's value used \(read\) in the program?_
  - _How many times is the variable assigned a new value?_
  - _What types are assigned to this variable during the program's execution?_
- [ ] 🐣 **Imperative Programming**: You can explain what the Imperative
      Programming paradigm is, and can explain how you know the programs in
      Welcome to JS are Imperative.
- [ ] 🐣 **Tracing Execution**: You can complete a "steps" trace table and
      correct your table using console output from the "trace" button.
- [ ] 🐣 **Logging**: You can tracing specific aspects of a program's execution
      and log them to the console.
- [ ] 🐣 **Completing Programs**: You can successfully fill in blanks for a
      program when the missing words are provided, including distractors.
- [ ] 🐣 **Describing Programs**: You can read a program and describe it with
      comments using to the methodology from `/describing-programs`: zooming out
      -&gt; zooming in -&gt; connections -&gt; goals
- [ ] 🐣 **Naming Variables**: You can analyze how a variable is used in a
      program and give it two names:
  - **Generic**: You can give a generic name to a variable based on how it is
    used in the program.
  - **Specific**: You can give a specific name to a variable based on how it's
    used _and_ the program's domain (the program's specific data and use-case).
- [ ] 🐥 **Constructing Programs**: You can reconstruct a program's lines and
      indentation, successfully ignoring distractor lines.
- [ ] 🐥 **Linting**: You can find and fix simple linting errors in JavaScript
      programs.
- [ ] 🐥 **Stepping Through**: You can pause a script in a your browser's
      debugger, arrange the debugger, collapse extra panels, and step through a
      script written with Just Enough JS. At each point in execution you can
      make a prediction of the next line before executing, and can check your
      prediction using the _scopes_ panel.
- [ ] 🐥 **Modifying Programs**: You can make small changes in a program to
      change it's behavior without breaking it.
- [ ] 🐔 **Writing Programs**: Given a description of a program's behavior
      (_user story + test cases_), you can plan goals for the program and write
      code to pass the tests.

</details>

---

## Setting Up

<details>
<summary>expand/collapse</summary>
<br>

> You will need
> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and
> [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer
> to study this material
>
> Using a browser with good DevTools will make your life easier:
> [Chromium](http://www.chromium.org/getting-involved/download-chromium),
> [FireFox](https://www.mozilla.org/en-US/firefox/new/),
> [Edge](https://www.microsoft.com/edge),
> [Chrome](https://www.google.com/chrome/)

1. Install o update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it installed)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - Didn't work? you may need to try:
     - (mac) `$ sudo npm install -g study-lenses`
   - having trouble updating?
     - try this:
       `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Fork and clone this repository:
   1. fork the HackYourFuture repository to your personal account
      - `git@github.com:HackYourFutureBelgium/welcome-to-js.git`
   2. clone your fork to your computer
   3. when there are updates to the module:
      1. update your fork with a PR
      2. pull the changes from your fork to your computer
3. Navigate to the module repository in terminal
   - `$ cd welcome-to-js`
4. Run the `study` command from your CLI
   - `$ study`
5. The material will open in your default browser, you're good to go!
   - you can read the `study-lenses` user guide from your browser by navigating
     to `localhost:xxxx?--help`

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in
> [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should
> take care of it ; )

---

## Code Quality Scripts

This repository comes with some scripts to check the quality of this code. You
can run these scripts to check the code provided by HYF, and to check the code
you write when experiment with the examples and complete the exercises.

### `npm run format`

This script will format all of the code in this repository making sure that all
the indentations are correct, the code is easy to read, and letting you know if
there are any syntax errors.

### `npm run spell-check`

This script will check all of the files in your repository for spelling
mistakes. Spelling is not just a detail, is important! Good spelling helps
others read and understand your programs with less effort.

`spell-check` is not so clever though, it doesn't have _all_ possible words in
it's dictionary and it won't know if you _wanted_ to spell a word incorrectly.
If you think one of it's "Unknown word"s is not a problem, you can either ignore
the suggestion or add the word to the `"words": [ ... ],` list in
[.cspell.json](./.cspell.json).

### `npm run lint:md`

This script will [lint](https://en.wikipedia.org/wiki/Lint_%28software%29) all
the Markdown files in this repository, checking for syntax mistakes and other
bad practices. Fixing linting errors will help you learn to write better code by
pointing out your mistakes _before_ they cause problems in your program.

Some linting errors will take some practice to understand and fix, but it will
be a good use of time.

### `npm run lint:js -- ./path/to/code`

Just like `lint:md`, but for `.js` files. This script will lint all of the JS
files in this repository, letting you know if there are any syntax errors or bad
practices.

</details>

---

## Study Path

### [0. Flashcards](./0-flashcards)

Study these a little bit every day and add new flashcards for things you don't
want to forget.

### [0. Printables](./0-printables)

Cheat sheets and diagrams you can print out and have next to you while studying.

### [1. Programming](./1-programming)

What is a program? How does JavaScript work?

### [2. Just Enough JavaScript](./2-just-enough-javascript)

Go in depth on JavaScript you need to know for writing interactive text-based
programs in the browser. Along the way you will learn how each language feature
works in small programs.

### [3. Programming Skills](./chapter-3.md)

Learn how to understand, modify and write larger interactive programs in
JavaScript. You'll cover some of the hidden skills necessary to develop quality
software and to work collaboratively on a code base.

---

## Lesson Plans

If you are using this material with teachers and students, check out
[./lesson-plans](./lesson-plans) for some ideas what to cover in class.
