# Welcome to JS

[<< UX/UI Design](https://github.com/hackyourfuturebelgium/ux-ui-design) | [Home](https://home.hackyourfuture.be) | [Debugging >>](https://github.com/hackyourfuturebelgium/debugging)

---

> _JavaScript_: Don't judge me by my bad parts, learn the good stuff and stick with that!
>
> - [Eric Freeman](https://www.oreilly.com/library/view/head-first-javascript/9781449340124/ch01.html)

Take your first steps into programming by learning to read, trace, and analyze small programs.

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [About Programming](#about-programming)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
- [Class Recordings](#class-recordings)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install OR update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it already)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - Didn't work? you may need to try:
     - (mac) `$ sudo npm install -g study-lenses`
   - having trouble updating?
     - check your version: `$ npm ls -g study-lenses`
     - uninstall, then reinstall: `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Fork and clone this repository:
   1. fork the HackYourFuture repository to your personal account
   2. clone your fork to your computer
   3. when there are updates to the module:
      1. update your fork with a PR
      2. pull the changes from your fork to your computer
3. Navigate to the module repository in terminal
   - `$ cd welcome-to-js-prep`
4. Run the `study` command from your CLI
   - `$ study`
5. The material will open in your default browser, you're good to go!
   - you can read the `study-lenses` user guide from your browser by navigating to `localhost:xxxx?--help`

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#welcome-to-js)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice Pair Programming: two people, one computer.
- Read the code out loud
- Take a look through the [HYF Study Tips](https://home.hackyourfuture.be/students/study-tips) for more inspiration

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

[TOP](#welcome-to-js)

---

## About Programming

Software Development is a many layered skill. One way to break it down is to think of these layers:

<details>
<summary>expand/collapse</summary>
<br>

1. **Source Code**: _The basic literacy of programming_
   - Learning the key words (_vocabulary_) and syntax (_grammar_) for your programming language
   - Being able to read your code out loud, tracing it's execution as a computer would
   - Understanding what the developer wanted to say with their code
   - > **Welcome to JS** will focus on these skills\_
2. **Machine Instructions**: _The basic mechanics of programming_
   - Understanding the life-cycle of your program
   - Understand how the computer will interpret your source code to create a running program
   - Understand what about your code matters to the computer, and what matters to people
   - Fixing syntax errors that occur when you try to run your code
   - Predicting which lines of code will be executed in which order
   - Predicting how each line of code will change what is stored in program memory
   - Reading error messages & callstacks to fix fix semantic errors that occur when you run your code
   - > **Debugging** will focus on these skills\_
3. **Problem Solving & Algorithms**: _Breaking down large problems to be solved in small steps_
   - Understanding a coding challenge and being able to break it down in different ways
   - Determining which solution strategies are correct for which types of problems
   - Understanding how test cases are used to describe your solution strategy
   - Identifying the best language feature to use with your strategy
   - Reading test cases to understand how code is _supposed to_ behave
   - Using Test Cases to structure your solution design process (Test Driven Development)
   - Identifying and isolating mistakes in your code by reading failing test cases
   - Demonstrating your code does what you think it does by passing test cases
   - > _**Behavior, Strategy, Implementation** Module will focus on these skills_
4. **Software Design**: _Organizing smaller pieces of code into full software solutions_
   - All in good time ;)
   - > _Every module starting with **Separation of Concerns** will focus on these skills_

</details>
<br>

[TOP](#welcome-to-js)

---

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>

### Be the Computer

These two games are deceptively simple. You will be given pseudo-code and will need to follow the instructions the same way a computer would. Practicing this game will help you learn how to trace code, and prepare you for learning about program memory in the next module - Debugging.

- 🥚 [compute-it](http://compute-it.toxicode.fr/)
- 🐣 [little-dot](http://little-dot.toxicode.fr/)

### What is Programming?

- [CodeAcademy](https://www.codecademy.com/articles/what-is-programming)
- [The Coding Train](https://www.youtube.com/watch?v=AImF__7FyzM)
- [Practical Introduction to JS](https://shawnr.gitbooks.io/practical-introduction-to-javascript/content/what-is-programming/)

### What is JavaScript?

- [Andrew Mosh](https://www.youtube.com/watch?v=upDLs1sn7g4)
- [Code School](https://www.youtube.com/watch?v=nItSSTwBvSU)
- [MDN: First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [javascript.info](https://javascript.info/intro)
- [Danielle Thé](https://www.youtube.com/watch?v=gT0Lh1eYk78)

### Just Enough JavaScript

In this module you will only learn a small part of what JavaScript has to offer. You will learn _just enough_ JavaScript to make small programs that process text and interact with users. Why just enough, and not a little more? Because reading and understanding program logic is more important than JavaScript, so why let the code get in the way?

- [just-enough-javascript](./just-enough-javascript)

### Tutorials

A selection of tutorial sites with interactive exercises, these tutorial will help you learn the JS Syntax you need to study the exercises in this repository. As you're setting your study plans and priorities, remember: [Just Enough JavaScript](./just-enough-javascript). These tutorials will each cover different topics in different orders and in different ways. Find the one that works for you:

- [sololearn](https://www.sololearn.com/learning/1024): through Conditionals and Loops
- [javascript.express](https://www.javascript.express/): the chapters that cover Just Enough JavaScript
- [launchcode](https://education.launchcode.org/intro-to-professional-web-dev/index.html): chapters 1 -> 5
- [programiz](https://www.programiz.com/javascript/get-started): through while loops
- [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/): through for loops. (more advanced)
- [Headfirst JavaScript](https://www.oreilly.com/library/view/head-first-javascript/9781449340124/ch01.html): an outstanding (paid) book for understanding JS and the web. comes with code samples you can run locally

Is there another tutorial you like better than these? not a problem! Just us a PR so other students can find it ;)

### References

Resources you can use to look up specific concepts when you are stuck or curious.

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/javascript): _the_ reference for JavaScript. It will take time to learn how to read and understand MDN, but it's worth the wait.
- [javascript.info](https://javascript.info): for short and clear explanations of everything you will need in JS
- [hackyourfuture.github.io/study](https://hackyourfuture.github.io/study): a collection of explanations and resources put together by the HYF community. PR's are welcome!
- [codeacademy cheat-sheets](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)

### Asking and Searching

- your class repo: issues & discussions
- [ask a duck](https://rubberduckdebugging.com/)
- [what happens when ...](https://github.com/alex/what-happens-when)
- [getting answers](https://www.mikeash.com/getting_answers.html)
- [how to ask programming questions](https://www.propublica.org/nerds/how-to-ask-programming-questions)
- [asking technical questions](https://www.youtube.com/watch?v=Gc9ilHp01vY)

<!-- ### Flashcards

There's a good reason these have been around forever, they work. Quiz yourself on the most fundamental concepts in this module the good old-fashioned way: with flashcards.

- 🥚 **[Printables](./flashcards/printables)**: PDFs to print and study offline
- 🥚 **[Interactive](./flashcards/interactive)**: to study live in your browser -->

### Reading Code

- ([how do computers read code?](https://www.youtube.com/watch?v=QXjU9qTsYCc))
- [Reading code is harder than writing it](https://trishagee.github.io/presentation/reading_code/)
- [Learn to read the Source, Luke](https://blog.codinghorror.com/learn-to-read-the-source-luke/)
- [Close-Reading Code](https://kylefdoherty.github.io/blog/2014/06/26/close-reading-code/)
- [Read Code Good](https://www.youtube.com/watch?v=mW_xKGUKLpk)
- [How to read code?](https://itnext.io/how-to-read-code-bf478c262932)
- [5 tips](https://medium.com/@smilin.robin/5-tips-on-how-to-read-someone-elses-code-b931b6a059ec)
- [How to read other people's code](https://selftaughtcoders.com/how-to-quickly-and-effectively-read-other-peoples-code/)
- [ASCII Pronunciation Rules for Programmers](https://blog.codinghorror.com/ascii-pronunciation-rules-for-programmers/)
- [JavaScript Glossary](https://www.codecademy.com/articles/glossary-javascript)
- [How to teach programming (and other things)?](https://www.youtube.com/watch?v=g1ib43q3uXQ&feature=youtu.be&t=1209)
- Code Reading Clubs - [code-reading.org](https://code-reading.org/)
  - [Resources](https://github.com/CodeReadingClubs/Resources)
  - [pdf-maker](https://github.com/CodeReadingClubs/pdf-maker) - convert code from GitHub into a PDF for reading

### Exercises in this Repo

The exercises in this module focus on how to read and understand programs that interact with a user. As a programmer you will spend more of your time reading, understanding and adjusting code than you will writing it. So why not start there?

- 🥚 **[reading-code](./reading-code)**: Practice reading files of code. This includes identifying variables, tracing code like the computer, drawing on the code, and asking good questions.
- 🐣 **[forest-and-trees](./forest-and-trees)**: Analyze programs in detail learning to explain what is happening on each line, and explaining how each line contributes to the program's overall behavior.
- 🐣 **[parsons-problems](./parsons-problems)**: You will be given many lines of code, scrambled out of order. You need to move them back into the correct order and indentation. Careful! there may be some extra lines
- 🐣 **[word-banks](./word-banks)**: Complete programs by filling in the blanks. All the missing words and symbols will be provided, you need to figure out where they go.
- 🐣 **[naming-variables](./naming-variables)**: Code should be written for people first, computers second. Learn to give helpful names to your variables that describe what data they store and how they are used in your program.
- 🐣 **[logging](./logging)**: Learn how to create your own trace of a program's execution using `console.log`. Practice tracing different aspects of the same program's execution.
- 🐥 **[explorations](./explorations)**: Experiment with JS language features that interest you, try modifying the programs in this repo, or try writing your own. This folder is yours to explore JS and programming.

</details>
<br>

[TOP](#welcome-to-js)

---

## Week 1

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- [What is Programming?](#what-is-programming), [What is JavaScript?](#what-is-javascript)
- Follow the instructions in [Getting Started](#getting-started) to install `study-lenses`
- Read through [./just-enough-javascript](./just-enough-javascript)
  - Through conditionals
- In your favorite tutorial learn about:
  - variables
  - primitive types
  - conditions

### During Class

#### Before Break

[just-enough-javascript](./just-enough-javascript)

- **all together**: Variables and Interactions
- **in groups**: Conditionals and While Loops

#### After Break

[Reading Code](./reading-code/README.md)

- **all together**: Remebery
- **in groups**: Madlib and Getting an Orange

### After Class

No project. Just lots of study time, alone and in groups. Keep asking questions!

1. Take a look through the tutorials in _Suggested Study_ and choose your 1 or two favorites.
   - Use _Just Enough JavaScript_ to help you stay focused, if you are blocked on something in your tutorial that isn't in _Just Enough JavaScript_ then you can set it aside for now.
   - Try out the _Parsons Problems_ for each language feature as you learn them in the tutorial. You can even try making your own Parsons Problems from code in your tutorial!
2. With your classmates:
   - practice _Reading Code_
   - complete at least 3-4 _Forest and Trees_ exercises
   - practice _Logging_, can you create a helpful trace of the programs using `console.log`?

</details>
<br>

[TOP](#welcome-to-js)

---

## Week 2

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- In your favorite tutorial learn about:
  - while loops
  - for loops
- Naming Variables:
  - read the [README](./naming-variables/README.md)
  - watch the [guide](./naming-variables/guide.mp4)

### During Class

#### Before Break

[Forest and Trees](./forest-and-trees/README.md)

- **all together**: examples
- **in groups**: Frogopedia 1 & 2

#### After Break

[Naming Variables](./naming-variables/README.md)

- **all together**: examples
- **in groups**: Animalopedia

### After Class

No project. Just lots of study time, alone and in groups. Keep asking questions!

1. Keep working through your favorite tutorial(s):
   - Use _Just Enough JavaScript_ to help you stay focused, if you are blocked on something in your tutorial that isn't in _Just Enough JavaScript_ then you can set it aside for now.
   - Try out the _Parsons Problems_ for each language feature as you learn them in the tutorial. You can even try making your own Parsons Problems from code in your tutorial!
2. With your classmates:
   - practice _Reading Code_
   - complete as many _Word Blanks_ as possible
   - complete at least 3-4 _Naming Variables_ exercises

</details>
<br>

[TOP](#welcome-to-js)

---

## Class Recordings

Screen recordings of class. Coaches, when sending your PR's with links please ...

- Add a link to your video in the correct module's section
- Indicate which class you were teaching
- Which week it was
- Give your name
- and a helpful description

---

## [class-13-14](https://github.com/hackyourfuturebelgium/class-13-14)

> Thibault, Evan

1. Week 1:
   - [Tracing Variables pt. 1](https://vimeo.com/524232825/)
   - [Tracing Variables pt. 2](https://vimeo.com/524233174/)
   - [Reading Code](https://vimeo.com/524232999/)
2. Week 2:
   - [Studying MadLibs pt. 1](https://vimeo.com/528300558)
   - [Studying MadLibs pt. 2](https://vimeo.com/528300446)
