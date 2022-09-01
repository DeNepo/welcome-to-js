# Tracing Variables

Until you learn how to _trace_ a program, code can feel like a mystery. After
you've learned how to trace, code can still be tricky to understand but at least
there is no more mystery.

---

## Ways to Trace

There are many techniques for tracing a program, each one has some pros and
cons. What matters most at this point is that you try them all find the one that
helps you most:

- **The `?variables` lens**: Helpful to find your way around the code before
  moving on to the dynamic tracing techniques. This lens will help you find all
  the variables and how they are used in the code.
- **JS Tutor**: This website visualizes how program memory works. You can step
  forwards and backwards through the program one statement at a time, seeing how
  each instruction interacts with memory. Studying in this site has two separate
  steps, just like with a real JS program:
  1. Write code in the editor
  2. Run the code and step tep through it in the visualization page
- **The "trace" button**: When you click this button it will run your code and
  log every step of execution to the console. Compared to JS Tutor the "trace"
  button will step through your program in more detail (logging every operator),
  but will not have a nice visualization of memory.
- **Trace Tables ("tables" button)**: This is a way to manually trace a program,
  writing down each time a variable is used so you can understand the program's
  dynamic behavior. You can check your trace tables by comparing them to the
  console output from the "trace" button.
- **Learn With Trace**: Like JS Tutor, but with different visualizations.
- **JS Tutor Live**: This is like JS Tutor, but with only one page. You edit the
  code and step through it on the same page. As you change the code the
  visualization will update in real time. This is helpful for quicker studying
  but is not how a real JS program works.
- **The `?highlight` lens**: This allows you to draw on the code, tracing the
  program's execution with different colors. This technique works very well for
  group study. (programs in this folder will open with `?highlight` by default)
- **🐔 The Debugger**: Built into your browser is a great tool for stepping
  through your programs and understanding every detail of execution. If this is
  too much information at first then you can leave it for now, you'll cover this
  in depth with the Debugging module.

So that's a lot of info, but how can you know when you've understood a program
and are ready to study the next? It's quite simple actually: can you correctly
fill out a trace table without looking at the console output?

Trace tables are such a great tool for study and self-assessment that there's a
whole section about them ...

---

## Trace Tables

Trace tables have been around as long as computer programming (probably). The
challenge with a trace table is to run the code in your head, keeping track of
all the variables in your program by hand. This is also called a _dry run_ or a
_desk check_.

You can write trace tables on paper with a pencil (always a good way to go), or
you can use the trace tables built into Study Lenses. There are three different
types of trace table available in Study Lenses:

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
