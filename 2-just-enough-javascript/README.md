# Just Enough JavaScript

> This README is also a study guide for _Just Enough JavaScript_, we suggest
> leaving it open as a reference as you work your way through the chapter.

JavaScript is a huge and powerful programming language, this makes it exciting
but also challenging to learn.

In this module you will only learn a small part of what JavaScript has to offer.
You will learn _just enough_ JavaScript to make small programs that process text
and interact with users. Why just enough, and not a little more? Because reading
and understanding program logic is more important than JavaScript, so why let
the code get in the way?

In this directory is all the JavaScript you will find in this module's
examples and exercises. Don't be mistaken, there's a lot you can do with only
this!

---

## Understanding a Program

The main goal of this chapter is that you can understand small programs written
using _Just Enough JavaScript_. You know you have understood a program when you
can use a trace table to explain how it works (_dynamic analysis_), and when you
can answer all the `[ask me]` questions about it.

---

## Exercises

**Just Enough JavaScript** doesn't only introduce JS language features, it also
introduces and reinforces specific programming skills you should master. Skills
are tricky things: you may be comfortable tracing programs that use
conditionals, but that doesn't mean you'll be comfortable tracing programs with
loops! So this chapter will have you practice the same skills over and over on
progressively more complicated programs. At first it may feel a little slow, but
once you get a feel for it you'll appreciate the confidence this repetition
brings.

You can read through rest of this document to learn about about each type of
exercise you will encounter in _Just Enough JavaScript_.

### LLM Study Strategies

For many of these exercises we have suggested an **LLM Study Strategy** with
starter prompt(s) you can use and/or tips for practicing this skill with an LLM.
Most of the prompts are adapted from the **Template Study Prompt** in
[`0-studying-with-llms`](../0-studying-with-llms/).

LLMs can help you learn and practice, but they don't replace the interactive
Study Lenses exercises. You should still judge if you've mastered a skill by
whether or not you can complete the Study Lenses exercises with ease.

> PS. don't forget to upload the context documents from
> [`0-studying-with-llms`](../0-studying-with-llms/) to your LLM whenever
> possible!

---

### 🥚 Marking Syntax

A good way to internalize JS syntax is to practice marking it on a page.
Printing code and marking on paper is a great way to go, but you can also do it
in your browser with the `?highlight` lens.

Here's a quick guide for how to mark each piece of syntax, you can find images
of how to mark the code in the `/examples` folders:

1. **Primitives**:A small arrow _under_ the primitive.
1. **Identifiers**: A line _under_ the identifier.
1. **Function Calls**: A line under the identifier and a half-box under the
   arguments.
1. **Operators**: A small arrow _above_ on the operator.
1. **Keywords**: A line _over_ the keyword.
1. **Blocks**: A half-box written in the block's indentation.
1. **Checks**: A half-box written over the check.

Familiarize yourself with the syntax of each new language feature by marking
each part in a different color. Taking a few minutes to familiarize yourself
with how JavaScript is written _before_ studying full programs will make the
rest go a lot smoother.

> PS. `// prettier-ignore`
>
> The marking exercises will have an extra block around the code and a comment
> written before the block. You can ignore that. It's there so that Prettier
> doesn't remove the extra spacing when it formats the code.

### Marking Syntax: LLM Study Strategy

LLMs can pretty good at describing the parts of syntax in a program, explaining
how they're used in your program. Be careful, LLMs are not perfect!

<details>
<summary>Template prompt for inspiration.</summary>

```
I would like to practice identifying, naming and explaining the different parts of syntax in a program focusing on:
- primitives
- identifiers
- function calls
- operators
- key words
- blocks
- control flow checks

By the end of this session, I should be able to:
- use correct vocabulary to describe all the characters in a program
- correctly mark each syntax feature using the conventions from Just Enough JS
- find and fix syntax errors added to my program as a challenge

Program to use as a practice context:
<paste a program to study OR the LLM will generate one>

Instructions for this session:
- Adjust for individual or group study, supporting peer learning if applicable.
- Tailor difficulty to my comfort level, providing less support as I progress.
- Connect the skill to real-world programming with practical examples.
- Use and explain precise vocabulary related to this skill.
- Guide me through self-assessment strategies.
- Offer alternative explanations and additional practice programs as needed.
- Conclude with open-ended, Socratic-style reflection questions.
- ! Remind me to verify information, as LLMs can make mistakes !
```

</details>

---

### 🥚 Trace

Practice _being the computer_, executing code line by line with your mind the
same way the computer does. Until you learn how to _trace_ code, programs and
bugs will be a mystery! After you've learned how to trace, it will still be hard
to understand programs but you'll at least know how to start :) Learning to
trace is tricky, but will save you many many hours in the future.

Because it can be hard to know if you are tracing correctly without someone by
your side to answer your questions, there are a few buttons to help you along
the way:

- **table**: the _table_ button will open an empty trace table in your browser
  that you can use to step through a program by hand.
- **trace**: the _trace_ button will log a trace of the program's execution to
  the console. You can use this to learn how to step through a program, and to
  see if your trace tables are correct.
- **openIn jsTutor**: exercises without user interactions can be opened in JS
  Tutor, this website will show you what is happening in program memory with
  each step.
- **debugger**: You can open any exercise in your browser's debugger using the
  `[debug]` button. At first you may find the debugger overwhelming, but with
  some practice it may become your favorite way to study code.

If you like to draw on code as you trace what's happening you can do that with
any file! Just replace `?--defaults` in your browser's URL bar with `?highlight`
and you're good to go.

<details>
<summary>Trace Tables</summary>

Trace tables have been around as long as computer programming (probably). The
challenge with a trace table is to run the code in your head, keeping track of
all the variables in your program by hand. This is also called a _dry run_ or a
_desk check_.

You can write trace tables on paper with a pencil, or you can use the trace
tables built into Study Lenses. There are three different types of trace table
available in Study Lenses:

1. **steps**: The _steps_ table asks you to be the computer and to go step by
   step through the program, recording each time a variable is declared, read,
   or assigned. When you use the steps table you can check your work by pressing
   `trace` button and comparing your table to the console output.
2. **values**: The _values_ table is the traditional type of trace table. With
   the _values_ table you only keep track of each time a variable is assigned a
   new value. You can also check your _values_ table by using the `trace` button
   and only checking against the _assign_ logs
3. **Operators**: This table is for studying operator precedence, you'll learn
   more about this in Debugging.

You may find that the **steps** table is more helpful in the beginning when you
are first learning. It forces you to pay close attention to each step of program
execution.

Later on you may prefer the **values** table because it allows you to look at
the bigger picture and see more clearly the _strategy_ (or _algorithm_) of a
program.

<details>
<summary>links about <strong>values</strong> trace tables</summary>
<br>

- videos
  - [TeamComputing](https://www.youtube.com/watch?v=DyeVR1zb7Jo)
  - [Computer Science Tutorials](https://www.youtube.com/watch?v=UbANyxE7pGE)
  - [Chris Mayfield](https://www.youtube.com/watch?v=tJGrie7k97c)
  - [Revise Computer Science](https://www.youtube.com/watch?v=dzYlncc72O0)
  - [5 Minutes to Code: Programming Basics "Trace Tables"](https://www.youtube.com/watch?v=i2qLAVBUERs)
- articles
  - [akxl - Desk Checking](https://www.akxl.org/JavaProgramming1/TraceTables.htm)
  - [101computing](https://www.101computing.net/using-trace-tables/),
    [online table](https://www.101computing.net/trace-table/)
  - [ibcomputerscience](https://ibcomputerscience.xyz/trace-tables/)
  - [wikipedia](https://en.wikipedia.org/wiki/Trace_table)
  - [bits of bytes](https://www.bitsofbytes.co/trace-tables.html)

</details>

</details>

### Trace: LLM Study Strategy

LLMs can generate clearly formatted traces of a program's execution. Their
structure is helpful for learning how to talk about program execution, but be
careful! They may not always be reliable. You should double-check the LLMs trace
with the debugger or the trace button for certainty and extra detail.

Here are some example prompts you can copy-paste asking the LLM to trace your
program at different levels of resolution:

<details>
<summary>Template prompts for inspiration.</summary>

- <details>
  <summary>A basic predictive trace</summary>

  ```
  I would like to practice tracing, step by step, what happens when a program is executed and what is stored in memory at each step.

  By the end of this session, I should able to:
  - narrate the program's execution out loud including
    - which line is being executed and what it does
    - what will change in memory
    - which line will execute next
  - draw a representation of program memory and update it's values with each step
  - fill out a conventional trace table tracking how each variable is used

  Program to use as a practice context:
  <paste a program to study OR the LLM will generate one>

  Instructions for this session:
  - Adjust for individual or group study, supporting peer learning if applicable.
  - Tailor difficulty to my comfort level, providing less support as I progress.
  - Connect the skill to real-world programming with practical examples.
  - Use and explain precise vocabulary related to this skill.
  - Guide me through self-assessment strategies.
  - Offer alternative explanations and additional practice programs as needed.
  - Conclude with open-ended, Socratic-style reflection questions.
  - ! Remind me to verify information, as LLMs can make mistakes !
  ```

  </details>

- <details>
  <summary>Tracing at the operator level</summary>

  ```
  I would like to practice tracing, step by step, what happens at the operator level when a program is executed and what is stored in memory at each step.

  By the end of this session, I should able to:
  - narrate the program's execution out loud including
    - which operator is being executed, what it's called, and how it works
    - the values being passed into this operator
    - the value produced by this operator
    - which operator will execute next

  Program to use as a practice context:
  <paste a program to study OR the LLM will generate one>

  Instructions for this session:
  - Adjust for individual or group study, supporting peer learning if applicable.
  - Tailor difficulty to my comfort level, providing less support as I progress.
  - Connect the skill to real-world programming with practical examples.
  - Use and explain precise vocabulary related to this skill.
  - Guide me through self-assessment strategies.
  - Offer alternative explanations and additional practice programs as needed.
  - Conclude with open-ended, Socratic-style reflection questions.
  - ! Remind me to verify information, as LLMs can make mistakes !
  ```

  </details>

- <details>
  <summary>Tracing only variable assignments</summary>

  ```
  I would like to practice tracing, step by step, each time a variable is assigned or reassigned and what is stored in memory at each step.

  By the end of this session, I should able to:
  - narrate the program's execution out loud including
    - which variable is being used
    - whether it is being declared, initialized, read or written
    - what value it stored before this step
    - what value it will store after this step

  Program to use as a practice context:
  <paste a program to study OR the LLM will generate one>

  Instructions for this session:
  - Adjust for individual or group study, supporting peer learning if applicable.
  - Tailor difficulty to my comfort level, providing less support as I progress.
  - Connect the skill to real-world programming with practical examples.
  - Use and explain precise vocabulary related to this skill.
  - Guide me through self-assessment strategies.
  - Offer alternative explanations and additional practice programs as needed.
  - Conclude with open-ended, Socratic-style reflection questions.
  - ! Remind me to verify information, as LLMs can make mistakes !
  ```

  </details>

- <details>
  <summary>Tracing specific lines</summary>

  ```
  I would like to practice tracing, step by step, what happens when the lines <X> through <Y> are executed and what is stored in memory at each step.

  By the end of this session, I should able to (for the given lines):
  - narrate the program's execution out loud including
    - which line is being executed and what it does
    - what will change in memory
    - which line will execute next
  - draw a representation of program memory and update it's values with each step
  - fill out a conventional trace table tracking how each variable is used

  Program to use as a practice context:
  <paste a program to study OR the LLM will generate one>

  Instructions for this session:
  - Adjust for individual or group study, supporting peer learning if applicable.
  - Tailor difficulty to my comfort level, providing less support as I progress.
  - Connect the skill to real-world programming with practical examples.
  - Use and explain precise vocabulary related to this skill.
  - Guide me through self-assessment strategies.
  - Offer alternative explanations and additional practice programs as needed.
  - Conclude with open-ended, Socratic-style reflection questions.
  - ! Remind me to verify information, as LLMs can make mistakes !
  ```

  </details>

- <details>
  <summary>Tracing specific language features</summary>

  ```
  I would like to practice tracing, step by step, how <language feature> behaves in a program.

  By the end of this session, I should able to:
  - narrate the program's execution out loud, recognizing each time the language feature is reached
  - explain when and how (or if) the language feature access program memory and/or influence control flow

  Program to use as a practice context:
  <paste a program to study OR the LLM will generate one>

  Instructions for this session:
  - Adjust for individual or group study, supporting peer learning if applicable.
  - Tailor difficulty to my comfort level, providing less support as I progress.
  - Connect the skill to real-world programming with practical examples.
  - Use and explain precise vocabulary related to this skill.
  - Guide me through self-assessment strategies.
  - Offer alternative explanations and additional practice programs as needed.
  - Conclude with open-ended, Socratic-style reflection questions.
  - ! Remind me to verify information, as LLMs can make mistakes !
  ```

  </details>

- ... Use your imagination! If you know how you want to study and you ask
  clearly, the LLM can likely help you.

</details>

---

### 🥚 Read

Practice reading small programs and identifying key features in the code. You
will need to find syntax features, different scopes, variable usage, and much
more.

Most of the exercises are small interactive programs and have a list of
questions to help guide you explore the program. When you've answered all of
those questions you can keep going with the `[ask me]` button.

### Read: LLM Study Strategy

LLMs can generate comprehension questions for your program, just ask!

<details>
<summary>Template prompt for inspiration</summary>

```
I would like to practice asking and answering the right questions to develop my understanding of a program in different dimensions.

By the end of this session, I should able to formulate and answer questions about:
- the program's user-facing behavior
- the quality of the user's experience
- surface-level features of the program's code
- the runtime behavior of different features in the program
- how different lines of code are related, statically and dynamically
- the purpose of different parts in the context of the full program
- ... challenge me to ask and answer questions I wouldn't think of!
  - the Block Model of Program Comprehension is great inspiration

Program to use as a practice context:
<paste a program to study OR the LLM will generate one>

Instructions for this session:
- Adjust for individual or group study, supporting peer learning if applicable.
- Tailor difficulty to my comfort level, providing less support as I progress.
- Connect the skill to real-world programming with practical examples.
- Use and explain precise vocabulary related to this skill.
- Guide me through self-assessment strategies.
- Offer alternative explanations and additional practice programs as needed.
- Conclude with open-ended, Socratic-style reflection questions.
- ! Remind me to verify information, as LLMs can make mistakes !
```

</details>

---

### 🥚 Fill in the Blanks

Fill-in-the-blanks exercises will be JS scripts with some blanks for you to fill
in and (sometimes) a comment describing what should happen. Some exercises will
simple like this:

```js
'use strict';

console.log(true && _); // true
```

But others will be more complex. Larger exercises will open with the `?blanks`
lens where you will be able to decide how many words you want to remove from the
program. You will be shown a list of all the words that have ben removed from
the program, and have the option to compare the modified program to the correct
solution using a _diff editor_.

### Fill in the Blanks: LLM Study Strategy

You can work with an LLM to generate programs with blanks, then to discuss how
you would fill in each blank and to compare possible solutions.

<details>
<summary>Template prompt for inspiration</summary>

```
I would like to practice completing the blanks in an otherwise correct program.

By the end of this session, I should able to:
- recognize when there is only 1 valid solution for a blank, or if there could be many
  - if multiple solutions are possible, I can think of at least 3
- fill in larger blanks I learn programming in general and this program specifically
  - first blanks for a single operator/identifier/keyword/...
  - then blanks for larger parts of one line
  - finally blank for a full line (when reasonable)
- describe what clues and reasoning I used to find my solutions

Program to use as a practice context:
<paste a program to study OR the LLM will generate one>

Instructions for this session:
- Adjust for individual or group study, supporting peer learning if applicable.
- Tailor difficulty to my comfort level, providing less support as I progress.
- Connect the skill to real-world programming with practical examples.
- Use and explain precise vocabulary related to this skill.
- Guide me through self-assessment strategies.
- Offer alternative explanations and additional practice programs as needed.
- Conclude with open-ended, Socratic-style reflection questions.
- ! Remind me to verify information, as LLMs can make mistakes !
```

</details>

---

### 🥚 Quiz

Some chapters will have a `/quiz` folder, these contain multiple choice
questions to test your knowledge. By the end of this module you should be
comfortable finding the right answers for each quiz **_and_** understanding why
the wrong answers are incorrect.

Careful, passing the quizzes is not enough! Being able to answer questions is
not the same thing as building and practicing skills. Even if you are
comfortable with the quiz in a chapter, you should _still_ keep practicing the
exercises.

### Quiz: LLM Study Strategy

Quizzing is an outstanding use case for LLMs in your study!

<details>
<summary>Template prompt for inspiration</summary>

```
Can you quiz me on <feature/topic/skill> to assess and reinforce my understanding?

Here are ideas for different question types to keep things fresh:
- formative, misconception-based MCQs with explanations for each possible answer
- generate a program with one missing line, then provide possible lines to fill the blank
- generate two similar programs and ask me to compare them
- present several similar programs and ask which one produces a specific list of input/output pairs
- provide a program and a list of possible output values: ask which value is impossible
- ask which path will be executed through a program when a specific input value is provided
- present a program and ask which of several traces could be generated by it
- give the lines of a program out of order and ask me to put them in order
  - you may include extra lines as a challenge
- ... be creative!  The Block Model of Program Comprehension is great inspiration

Instructions for this session:
- Adjust for individual or group study, supporting peer learning if applicable.
- Tailor difficulty to my comfort level, providing less support as I progress.
- Connect the skill to real-world programming with practical examples.
- Use and explain precise vocabulary related to this skill.
- Guide me through self-assessment strategies.
- Offer alternative explanations and additional practice programs as needed.
- Conclude with open-ended, Socratic-style reflection questions.
- ! Remind me to verify information, as LLMs can make mistakes !
```

</details>

---

### 🥚 Copy-Type

Ever heard of "copy-paste"? This is kind of like that but a much better way to
learn. Instead of letting the computer do the copy and pasting for you, you need
to do the copying and the typing.

With Copy-Type exercises you will practice writing out programs from a blank
page. On the left is an empty editor, on the right is the finished code: you
need to re-write the program _exactly_ into the editor on the left. But there's
a catch! You can only see one of the editors at a time, and you can't
copy-type >:) Your goal will be to memorize the syntax and structures of
JavaScript, you will not be running these programs or changing them.

You can study these exercises alone to memorize and master JS syntax, flipping
between _read_ and \_write like a flashcard. Or you can do them in small groups.
If you study these in groups you and your group members should take turns in
each role:

- **Reader**: The _reader_ will open the finished program and will read the
  program out loud, guiding the _writer_ as they complete the program. The
  reader's challenge is help the writer _exactly_ reproduce the code; each
  space, each new line, each character, each capital letter, everything!
- **Writers**: the _writers_ will try to write down _exactly_ the correct
  program following only the instructions of reader. No peaking! The writers
  should not look at the finished program, only listen to the advice of their
  reader and follow the hints in the editor.

Looking for an extra challenge? Try to complete these exercises _without ever_
showing each other your screens!

### Copy-Type: LLM Study Strategy

Not much to do here! You could ask the LLM to generate more programs for you to
study, but the diff feedback in Study Lenses will be more helpful than an LLM
for copy-type.

---

### 🥚 Translate

You'll be given a JavaScript file with `'use strict'` up top and a commented out
PseudoCode program, you will need to translate the program to JavaScript.

These exercises will give you a chance to practice JS syntax, read PseudoCode
and analyze the logic in small programs.

Writing code is only a tiny part of programming. Understanding the problem and
designing a solution is much more important!

And JavaScript has a lot of syntax and can be slow to write, you just learned
all that syntax and are probably wishing you never have to use it again.
PseudoCode to the rescue!

The purpose of PseudoCode is for developers to sketch and discuss ideas without
worrying about the computer understanding their code. There are some conventions
for how to write PseudoCode so other developers can understand you but it's
flexible. As long as your colleagues understand you, that's all that counts.

You don't need to spend a lot of time studying PseudoCode, the syntax isn't so
hard and you'll pick it up as you use it. With Study Lenses you can also convert
any JavaScript code into PseudoCode which gives you more than enough examples to
learn from.

<table>

<tr>
<td>

### Before

</td>
<td>

### After

</td>
</tr>

<tr>
<td>

```js
'use strict';

// input <- null

// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

// alert(input)
```

</td>
<td>

```js
'use strict';

// input <- null
let input = null;
// WHILE: input === null
while (input === null) {
  //   input <- prompt('enter something')
  input = prompt('enter something');
  // :END WHILEs
}

// alert(input)
alert(input);
```

</td>
</tr>
</table>

### Translate: LLM Study Strategy

Here are a few ideas for using LLMs to study translating pseudocode to
JavaScript:

- When you've finished translating a program, you can copy-paste the
  pseudocode + your translation into the LLM and ask it for feedback. There may
  be other possible translations you didn't think of, it could be interesting to
  compare them and learn different ways of implementing the same pseudocode.
- You can describe the type of program you'd like to study then ask the LLM to
  generate pseudocode for you to translate. Then you can still practice
  translating in an editor without the help of an LLM.
- <details>
  <summary>Prompt for an interactive translation session.</summary>

  ```
  I want to practice translating from pseudocode to JavaScript. Can you guide me through an interactive study session? This is an exercise in recalling JavaScript syntax and connecting code structure to its behavior, not an exercise in problem-solving, debugging, or program logic.

  I would like to focus on translating programs that use these language features:
  - <language feature 1>
  - ...

  By the end of this session, I should able to:
  - Recall and correctly apply JavaScript syntax when translating pseudocode.
  - Translate the structure of syntax like blocks, conditional checks, or function calls before translating their contents.
  - Recognize when there is more than one way to write syntactically correct JavaScript, and choose clear, concise translations.
  - Translate pseudocode styles of varying detail while focusing on JavaScript syntax rather than problem-solving.
  - Explain the reasoning behind the translations that I chose, with an emphasis on readability and clarity
  - Translate different pseudocode styles, recognizing their trade-offs WRT clarity, simplicity and ease of translation

  Instructions for this session:
  - Focus on helping me recall and apply the correct JavaScript syntax as I translate pseudocode.
  - Guide me in understanding how the structure of the JavaScript code connects to the intended behavior, without focusing on debugging or logic design.
  - Provide real-time feedback to confirm the correctness of the JavaScript syntax I’m using.
  - If there are alternative syntactically correct ways to translate a line, point them out but do not dive into optimizing or restructuring the code.
  - Avoid introducing logical problems, debugging tasks, or problem-solving exercises.
  - Prompt me to think of alternative ways to translate the same line.
  - Adjust for individual or group study, supporting peer learning if applicable.
  - Tailor difficulty to my comfort level, providing less support as I progress.
  - Connect the skill to real-world programming with practical examples.
  - Use and explain precise vocabulary related to this skill.
  - Guide me through self-assessment strategies.
  - Offer alternative explanations and additional practice programs as needed.
  - Conclude with open-ended, Socratic-style reflection questions.
  - ! Remind me to verify information, as LLMs can make mistakes !
  ```

  </details>

---

### 🐣 Compare

Compare two programs, do they have the same behavior (_data in, data out_)?

- _If they do have **the same** behavior_: explain how the different lines of
  code create the same behavior.
- _if they have **different** behavior_: find test cases that show the
  difference and explain why the programs behave differently for these tests.

Each exercise will have a hidden answer to if the programs are the same or not,
but they will not explain why they are the same or give test cases. That's up to
you!

Below is an example of two programs you might compare and a good answer (you can
write your answers somewhere, or just say them aloud.):

<table>
<tr>
<td>

### Program 1

</td>
<td>

### Program 2

</td>
</tr>
<tr>
<td>

```js
'use strict';

let a = prompt('');

let b = 'no';
if (a !== '') {
  b = 'yes';
}

alert(a);
```

</td>
<td>

```js
'use strict';

let a = prompt('');

let b = '';
if (a === null) {
  b = 'no';
} else {
  b = 'yes';
}

alert(a);
```

</td>
</tr>
</table>

```txt
Program 1 and Program 2 are different.

If you input the empty string ("") into both they will output different values.

Program 1 outputs "no"
  The conditional will not be executed, so b will not be reassigned.
  Since b is initialized to "no", that will be the final value.

Program 2 outputs "yes"
  Since "" is not null, the second path will be executed.
  The second path assigned "yes" to b.
  That is the last time b is assigned a new value, so it will be the final value
```

### Compare: LLM Study Strategy

You can ask the LLM to generate two similar programs, then ask it to give
feedback on your description of the differences between the two programs:

<details>
<summary>Prompt for an interactive comparison session.</summary>

```
I want to practice comparing two very similar programs without bugs.  The programs can have different implementations, behaviors, or both.

I would like to focus on comparing programs that use these language features:
- <language feature 1>
- ...

By the end of this session, I should able to:
- identify superficial differences between programs; syntax and identifier choices
- identify deeper differences between programs' structures and strategy
- recognize when superficial changes do and don't impact program behavior
- recognize when different-looking programs actually have the same behavior
- identify which differences in a program's code result in differences in behavior

Instructions for this session:
- Guide me in understanding how the structure of the JavaScript code connects to the intended behavior, without focusing on debugging or logic design.
- Avoid introducing logical problems, debugging tasks, or problem-solving exercises.
- Adjust for individual or group study, supporting peer learning if applicable.
- Tailor difficulty to my comfort level, providing less support as I progress.
- Connect the skill to real-world programming with practical examples.
- Use and explain precise vocabulary related to this skill.
- Guide me through self-assessment strategies.
- Offer alternative explanations and additional practice programs as needed.
- Conclude with open-ended, Socratic-style reflection questions.
- ! Remind me to verify information, as LLMs can make mistakes !
```

</details>

---

### 🐣 Parsons Problems

Parsons problems are designed to help you study snippets of code without getting
caught by errors. You'll be given lines of code and your task is to place them
in order. But it's not always as easy as it sounds! Exercises will have extra
lines as distraction, you'll need to figure out which lines are part of the
program and which are there to confuse you.

- [all of the learning, less of the time time](https://computinged.wordpress.com/2017/11/17/parsons-problems-have-same-learning-gains-as-writing-or-fixing-code-in-less-time-koli-calling-2017-preview)
- [How to study programming](https://medium.com/swlh/how-to-study-computer-programming-parsons-problems-2bfdefabfd86)
- [what are these?](https://georgejmount.com/parsons-problems/)

### Parsons Problems: LLM Study Strategy

You _could_ try having an interactive parsons problem session with an LLM, but
the whole point of parsons problems is the user interface so ... give it a try
and let us know how it goes!

---

### 🐥 Logs

These are exercises where you practice writing as many programs as possible that
print the specific logs. When you run a program the console will display the
_expected logs_ (what your program _should_ print) and your _actual logs_ (what
your program _did_ print). If your actual logs are different from the expected
logs the exercise will show which logs are incorrect.

These exercises are meant for exploring JavaScript and all the creative ways you
can write code that does the same thing. For example:

<details>
<summary>Here are 3 solutions to the challenge "<em>write
a program that logs <code>1</code>, <code>2</code>, <code>3</code></em>"</summary>
<br />

Just plain old logs (boring):

```js
'use strict';

console.log(1);
console.log(2);
console.log(3);
```

Adding `1` to a variable:

```js
'use strict';

let number = 1;
console.log(number);

number = number + 1;
console.log(number);

number = number + 1;
console.log(number);
```

Stepping up to 3 with a while loop:

```js
'use strict';

let number = 1;
while (number <= 3) {
  console.log(number);
  number = number + 1;
}
```

Stepping up by 1 to the length of user input. Only works when the user follows
their instructions:

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something with 3 characters');
}

let number = 1;
while (number < input.length) {
  console.log(number);
  number = number + 1;
}
```

</details>

There will be two types of log exercises:

- **Not Interactive**: These exercises will not have any user interactions, all
  you need to do is write code that matches the expected logs.
- **Interactive**: Interactive exercises will be more complicated. You'll need
  to write some code _and/or_ pass in the correct input to match the expected
  logs.

Each exercise comes with a few starter programs to help you think of different
ways to solve the same problem. But you're not limited to these suggestions, you
can always start a new solution from an empty page!

### Logs: LLM Study Strategy

Logs exercises are designed for practicing writing code in an editor, using the
debugger, and passing tests - so it's probably not very helpful trying to
replicate Logs exercises in a chat. But, you can always use an LLM for support
when you're stuck writing one of your solutions.

---

### 🐔 Specs

> these exercises can be more challenging, if you get lots of errors or can't
> finish them right away that's ok. You'll learn more about writing programs
> later on.

"Specs" is short for "specifications". In development a
[_specification_](https://en.wikipedia.org/wiki/Software_requirements_specification#Structure)
is a description of the software that needs to be built - specific enough that
the team can get started but general enough that it doesn't tell them how to
write each file of code. Importantly, specs will also help a team know when
their software is good enough to call it done.

The `specs` exercises will ask you to write small interactive programs that meet
certain specifications. None of these exercises will be large programs, and each
one can be solved using only what you have learned in previous chapters of Just
Enough JavaScript.

All exercises will have these 4 parts:

1. **User Stories**: those are the interactions a user can have with this
   software when it is finished. You will also be given _acceptance criteria_ to
   help you know when you've satisfied the user story.
2. **Test Cases**: example input/output pairs - What data can you expect to come
   out of your program when you input certain values? You can use these test
   cases to make sure your software functions correctly. But don't stop there!
   See if you can think of other strange inputs that might break your program.
3. **Starter Code**: each exercise will have some starter code with a couple `_`
   blanks. You can change this as much as you want, it's just a suggestion
4. **Checklist**: working code does not mean you're finished! There is a
   checklist to help you know when your code is complete. You will need to make
   sure your code is formatted, has good variable names, is well-commented and
   error-free.

Even with these constraints, there are many different solutions to each problem.
See how many you can find! Below are 3 different ways to write a program that
meet the same specifications - to add excitement to the user's input (and there
are still many more solutions):

<details>
<summary>the challenge</summary>

```js
'use strict';
/*
  1. ===== the user story =====

  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  2. ===== the test cases =====

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

// 3.  ===== the starter code =====

console.log('--- begin program ---');

/* --- gather user input --- */

let input = prompt(_);
console.log('input:', input);

/* --- declare initial output --- */

let output = _;

/* --- create final output --- */

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  4. ===== the checklist =====

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

</details>

<details>
<summary>solution 1</summary>

```js
'use strict';
/*
  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

// maybe not the most clear instructions, but it's good enough for now
let input = prompt('if you cancel i will be sad. otherwise i will be excited.');
console.log('input:', input);

/* --- declare initial output --- */

// declaring output to an empty string
//  it will be assigned the correct value in a conditional later on
let output = '';

/* --- create final output --- */

// input will only be null if the user canceled
if (input === null) {
  // assign the sad output value because the user canceled
  output = ':(';
} else {
  // this is the path for any input that is not from the user canceling
  //  since the user didn't cancel, i assigned added some excitement
  output = input + '!';
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

<details>
<summary>solution 2</summary>

```js
'use strict';
/*
  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

// maybe not the most clear instructions, but it's good enough for now
let input = prompt('give me something to be excited about:');
console.log('input:', input);

/* --- declare initial output --- */

// initialized the output to the sad output, assuming the user canceled
//  if they didn't cancel, the program will later reassign the correct value
let output = ':(';

/* --- create final output --- */

// check if the user inputted a string value
if (input !== null) {
  // if they did not cancel, be excited about their input
  output = input + '!';
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

<details>
<summary>solution 3</summary>

```js
'use strict';
/*
  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

// maybe not the most clear instructions, but it's good enough for now
let input = prompt('give me something to be excited about:');
console.log('input:', input);

/* --- declare initial output --- */

// initialize the output to be excited, assuming the user didn't cancel
//  if they did cancel, the program will later reassign the correct value
let output = input + '!';

/* --- create final output --- */

// check if the user actually canceled
if (input === null) {
  // if they did cancel, be sad
  output = ':(';
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

### Specs: LLM Study Strategy

- You can paste in your complete solution (user stories + test cases + code +
  checklist) and ask the LLM to review your code for stylistic consistency,
  clarity and simplicity then to discuss possible improvements. This is a very
  good practice to learn!
- You can paste in a couple of the specs from Just Enough JavaScript so the LLM
  learns the format, then ask it to generate more specs for you to develop.

---

### 🐔 DOM I/O

Small interactive web pages that use the DOM I/O library. Each exercise will
have an _obfuscated_ solution so you can compare the output of your program to
the expected output without being able to read the solution.

### DOM I/O: LLM Study Strategy

You're on your own :)
