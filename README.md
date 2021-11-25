# Welcome to JS

Examples, exercises and guides for the
[Welcome to JS module](https://home.hackyourfuture.be/curriculum/welcome-to-js)
at HYF.

Check out [./.study](./.study?study) for learning objectives, extra resources,
and study plans.

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
