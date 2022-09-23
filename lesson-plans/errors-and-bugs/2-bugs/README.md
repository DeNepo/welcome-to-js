# Bugs

When your program runs without any errors, but does something different than you
expected.

---

## A Debugging Process

1. Write some _expected_ test cases (input/output pairs).

2. Run the program and note the _actual_ input/output pairs.

3. Pick one failing test case at a time to study:

   1. In the debugger, step through until you find a line that surprises you.

   1. Trace backwards from there until you reach a line that might be the cause.

   1. Comment out the line, and write a new experimental line.

   1. Describe your change in a comment, and why you think it will work.

   1. Predict what will happen with your new change.

   1. ... repeat until all the test case pass.

---

## Stand-Alone Trace Table

To make tracing easier while paused in the debugger, you can use this
[stand-alone trace table](https://wise.vub.ac.be/project/personalised-technology-enhanced-learning-environments).
You can download it from that link and it will stay open on top of your
browser's window.

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

<a href="./examples/mirror.js?study" target="_blank">Mirror</a>
