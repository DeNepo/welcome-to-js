# PseudoCode

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
any (working) JavaScript code into PseudoCode which gives you more than enough
examples to learn from.

---

## Crash Course

There is no single way to write PseudoCode, so treat this crash course as a more
guidelines than actual rules:

- **`console.log`**: you don't need this in PseudoCode, it never runs so there's
  nothing to log
- **Variable Declarations**: don't bother with that in PseudoCode, you can add
  in declarations when you translate to JS.

- **Variable Assignment**: Use `<-` instead of `=`. This is more clear because
  it shows that values are read from the right and assigned on the left.

- **All other Operators**: Write them the same way you would in JS.

- **Primitives, objects, arrays**: write them the same way you would in JS

- **Control Flow & Blocks**: Take a look at the next section ...

---

## Translating

So you've planned your program in PseudoCode and are ready to try running your
program? No problem! Because PseudoCode is close to JavaScript it's not very
hard to translate from PseudoCode to JS:

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

```txt
input <- null

WHILE: input === null
  input <- prompt('say hello')
:END WHILE

message <- ''

IF: input === 'hello'
  message <- 'hello to you too!'
ELSE:
  message <- 'good bye'
:END IF

alert(message)
```

</td>
<td>

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('say hello');
  console.log(input);
}

let message = '';
if (input === 'hello') {
  message = 'hello to you too!';
} else {
  message = 'good bye';
}
console.log(message);

alert(message);
```

</td>
</tr>
</table>

---

## Examples and Exercises

The exercises in this chapter will have small programs written in PseudoCode,
you need to translate them to JavaScript.
