# 🥚 `break`, `continue`

`break` and `continue` are two JavaScript key words that you can use in your
loops for _control flow_.

- `break` will end the loop immediately, no matter what. the rest of the loop
  body will not be executed
- `continue` will skip the rest of the loop body and go back to check the
  condition

```js
'use strict';
let input = null;

// normally while (true) would create an infinite loop
//  you can use `break` to exit the loop, so it is not infinite
while (true) {
  input = prompt('enter something');

  if (input === null) {
    // if the user canceled, repeat the loop
    //  the next conditional will be skipped
    alert('there is no escape');
    continue;
  }

  if (input !== '') {
    // exit the loop completely
    break;
  }

  alert('no empty text allowed');
}

alert(input + '!');
```

---

## References

- programiz: [break](https://www.programiz.com/javascript/break-statement).
  [continue](https://www.programiz.com/javascript/continue-statement)
- [net ninja](https://www.youtube.com/watch?v=QSuTH0C_3_Y)
