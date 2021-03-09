# Word Banks

The exercises in this folder are to test your JS vocabulary, syntax, and program comprehension. Each .js file has _most_ of a working program with just a few pieces missing. All of the missing pieces will be written in a block comment at the top of each program. Your task is to fill in the blanks for a working program.

Careful! There may be some extra options, and some options may be used more than once. But no options will be missing:

- **Before:**

  ```js
  /*
    unused:
      text
      of
      typeof
      log
      for
    used:

  */

  let _ = 'asdf';
  _ (let character _ _) {
    console._(character);
  }

  /* -- errors --

  */
  ```

- **After:**

  ```js
  /*
    unused:
      typeof
    used:
      of
      text
      for
      log
  */

  let text = 'asdf';
  for (let character of text) {
    console.log(character);
  }

  /* -- errors --
  
    > ReferenceError: text is not defined
  
    let log = 'asdf';
    for (let character of text) { // <-- error was here
      console.log(character);
    }
  
    > SyntaxError: Unexpected strict mode reserved word
  
    let text = 'asdf';
    of (let character for text) { // <-- error was here
      console.log(character);
    }
  
    > TypeError: console.typeof is not a function
  
    let text = 'asdf';
    for (let character of text) {
      console.typeof(character); // <-- error was here
    }
  
  */
  ```

---

## About Errors

With these exercises you will have many errors, don't let this get you down. It's easier to write code that _has_ errors than to write code that _doesn't_! Understanding and fixing errors in your code will take lots of practice, the Debugging module will study errors in depth. For now all you need to know about errors is:

- the error _name_ and _message_ so you can search about it online
- finding the line where the error occurred by reading the console output

As you complete each exercise you should keep track of all the errors you encountered. Try thinking of errors as the computer's best attempt at helping you fix your mistakes. Take notes on which errors you make the most often and what you figure out to avoid them.

### ReferenceError: \_ is not defined

There is one error you do not need to keep track of in your notes - `ReferenceError: _ is not defined`. You will get this error all the time, and it's not because of the code you write. we use \_ to show you where something is missing in the program, but JavaScript reads \_ as a variable that has not been declared.

Instead of dreading this error, you can thank it for telling you where the next blank is!
