# `break` and `continue`

`break` and `continue` are two JavaScript key words that you can use in your loops for _control flow_.

- `break` will end the loop immediately, no matter what. the rest of the loop body will not be executed
- `continue` will skip the rest of the loop body and go back to check the condition

<details open>
<summary>🥚 while true: break, continue</summary>

```js
let input = null;

// normally while (true) would create an infinite loop
//  you can use `break` to exit the loop, so it is not infinite
while (true) {
  input = prompt('enter something');

  if (input === null) {
    // if the user canceled, repeat the loop
    //  the next conditional will be skipped
    continue;
  }

  if (input !== '') {
    // exit the loop completely
    break;
  }
}

alert(input + '!');
```

</details>
