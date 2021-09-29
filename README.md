# Welcome to JS

Examples, exercises and guides for the
[Welcome to JS module](https://home.hackyourfuture.be/curriculum/welcome-to-js)

## Getting Started

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

## Materials

🥚🐣🐥🐔 **[./just-enough-javascript](./just-enough-javascript)**: In this
module you will only learn a small part of what JavaScript has to offer. You
will learn _just enough_ JavaScript to make small programs that process text and
interact with users. You'll need to study Just Enough JavaScript at the same
time as the other exercises.

- 🥚 **[./strict-mode](./strict-mode)**: a quick read and a couple examples.
  long story short: always use strict mode.
- 🥚 **[./reading-programs](./reading-programs)**: Practice reading interactive
  programs. This includes identifying variables, tracing code like the computer,
  drawing on the code, and asking good questions.
- 🥚 **[./plain-text-programs](./plain-text-programs)**: JavaScript programs
  written in `.txt` files that have no color. How is it different to study?
- 🐣 **[./describing-programs](./describing-programs)**: Analyze programs in
  detail learning to explain what is happening on each line, and explaining how
  each line contributes to the program's overall behavior.
- 🐥 **[./modifying-programs](./modifying-programs)**: A few working programs
  with challenges for how to change it's behavior. Each exercise comes with a
  few files: the original, and one extra file for each challenge. If you get
  lost in an exercise you you can copy-paste the original to start over.
- 🐥 **[./linting](./linting)**: Practice using feedback from ESLint to write
  code that uses consistent style and best practices.
- 🐔 **[./explorations](./explorations)**: Experiment with JS language features
  that interest you, try modifying the programs in this repo, or try writing
  your own. This folder is yours to explore JS and programming.

[TOP](#welcome-to-js)

---

## Study Tips

<details>
<summary>expand/collapse</summary>
<br>

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass
    tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is
  a very effective way to learn programming.
- Write lots of comments in the examples and exercises. The code in this
  repository is yours to study, modify and re-use in projects.
- Practice
  [Pair Programming](https://home.hackyourfuture.be/students/study-tips/pair-programming):
  two people, one computer.
- Take a look through the
  [Learning From Code](https://home.hackyourfuture.be/students/study-tips/learning-from-code)
  guide for more study tips

### Priorities

If you can't finish all the material in this repository, that's expected!
Anything you don't finish now will always be waiting for you to review when you
need it. These 4 emoji's will help you prioritize your study time and to measure
your progress:

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

### Hashtags

There's so many examples and exercises in this repository, it's easy to forget
of what you still need to finish or what you want to review again. Luckily
VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for
those hashtags later so you don't miss anything. Here's some ideas:

- `// #not-done, still a few blanks left` - search for `#not-done` in VScode to
  find all the exercises you've started and not finished
- `// coercion is confusing, #review this again next week` - search for
  `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Study Board

Creating a project board on your GitHub account for tracking your study at HYF
can help you keep track of everything you're learning. You can create the board
at this link: `https://github.com/your_user_name?tab=projects`.

These 4 columns may be helpful:

- **todo**: material you have not studied yet
- **studying**: material you are currently studying
- **to review**: material you want to review again in the future
- **learned**: material you know well enough that you could help your classmates
  learn it

</details>

[TOP](#welcome-to-js)

---

## Code Quality Scripts

<details>
<summary>expand/collapse</summary>
<br>

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

[TOP](#welcome-to-js)
