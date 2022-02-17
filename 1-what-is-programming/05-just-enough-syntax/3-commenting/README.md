# Commenting

In these exercises you will be given a small program then describe each piece of syntax with a comment.

Here's a shorthand you can use so your comments don't get too long:

- **kw**: _keyword_
- **id**: _identifier_
- **oper**: _operator_
- **prim**: _primitive_
- And for the different syntax characters:
  - **D**: _dot (or period)_ - `.`
  - **C**: _comma_ - `,`
  - **SC**: _semicolon_ - `;`
  - **OP**: _opening parenthesis_ - `(`
  - **CP**: _closing parenthesis_ - `)`
  - **OCB**: _opening curly bracket_ - `{`
  - **CCB**: _closing curly bracket_ - `}`

When you're done commenting a program it will look something like this:

```js
// prim SC
'use strict';

// kw id oper prim SC
let input = null;

// kw OP id oper prim CP OCB
while (input === null) {
  // id op id OP prim CP SC
  input = prompt('enter something');
  // CCB
}

// id OP id CP SC
alert(input);
```
