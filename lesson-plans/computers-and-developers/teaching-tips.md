# Teaching Tips

> Ideas and suggestions for coaches. PRs welcome!

- Be sure to emphasize the computer _does not_ "understand" the name of a
  variable. The only important thing for the computer is that the name is
  consistent through the program.
- Always remind students that when they're _reading_ a variable in a trace
  table, they _must_ read the most recent value in the table (reading bottom to
  top). They _must not_ read the value written in source code.
  - Program memory is dynamic, source code is static
- When helping a student with trace tables:
  1. First help them interpret the console trace to fill out a table (completing
     a table with the console open)
  2. When a student is filling in a table guide them with questions, not
     suggestions
  3. Once they can fill out the table by reading the trace, move on to helping
     them fill trace tables without the help of a console trace
  4. If they make a mistake in their table wait until they check the table
     against the console trace, then help them read the trace to find their
     mistake. (Instead of just telling them what is wrong in the table)
- Multiple concatenations in one line: `a + b + c`
  - use the console trace to help students understand that the operators are
    grouped and evaluated one a time, not all at once
  - `a + b` -> `x`
  - `x + c` -> `y`
