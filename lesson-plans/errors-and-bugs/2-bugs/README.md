# Bugs

When your program runs without any errors, but does something different than you
expected.

---

## A Debugging Process

1. Write some _expected_ test cases (input/output pairs).

2. Run the program and note the _actual_ input/output pairs.

3. Pick one failing test case at a time to study:

   1. In the debugger, step through until you find a line that surprises you.

   1. Study the line to understand how it's working.

   1. Comment out the line and write a new experimental line.

   1. Describe your change in a comment, and why you think it will work?

   1. Predict what will happen with your new change.

   1. ... repeat until all the test case pass.

---

## Structured Comment

This block comment can help you organize your thoughts while debugging:

```js
/*
  test cases:


  experiment 1
    line:
    why:
    trying:

  ...

*/
```

---

## Demo

<a href="./examples/five-long.js?study" target="_blank">Five Long</a>

---

## 🐔 Back-Tracing

A helpful but challenge debugging strategy is to trace _backwards_. You can
pause in the debugger on a line that confuses you and use a trace table to step
backwards through the program one step at a time until you understand **why**
the program did what it did.

This
[trace table app](https://wise.vub.ac.be/project/personalised-technology-enhanced-learning-environments)
is helpful to trace while your web page page is paused in the debugger.
