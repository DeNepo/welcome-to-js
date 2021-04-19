# Block Scope

Curly braces create a new _block scope_. There are lots of great explanations of block scope out there, but let's see if you can come up with your own after studying these examples.

```js
console.log('-- block scope --');

{
  let innerVariable = 'not available outside the curly braces';
}
innerVariable; // ReferenceError
```

<details>
<summary>🥚 inner and outer scope</summary>

```js
console.log('-- block scope: inner and outer scope --');

let outerVariable = 'declared outside';
console.log(outerVariable); // 'declared outside'

// begin a new block scope
{
  // variables declared outside of curly are available inside the curly braces
  outerVariable = 'assigned inside';
  console.log(outerVariable); // 'assigned inside'

  let innerVariable = 'declared inside';
  console.log(innerVariable); // 'declared inside'
}

// changes made inside the scope stay when you leave the scope
console.log(outerVariable); // 'assigned inside'

// variables declared in the inner scope are NOT available outside
console.log(innerVariable); // ReferenceError
```

</details>
<details>
<summary>🥚 shadowing</summary>

```js
console.log('-- block scope: shadowing --');

// shadowing is when you declare a variable inside a scope
//  that has the same name as a variable in the outer scope

// you should avoid variable shadowing
//  it makes your code harder to understand

let favoriteTree = 'palm';
console.log(favoriteTree); // 'palm'
{
  // the outer variable is "replaced" inside by the new variable
  // it's no longer possible to modify the outer variable from the inner scope
  let favoriteTree = 'date'; // no error!
  console.log(favoriteTree); // 'date'

  favoriteTree = 'cedar';
  console.log(favoriteTree); // 'cedar'
}
console.log(favoriteTree); // 'palm'
```

</details>

---

## Nested Scopes

You can create scopes inside of scopes. This is very common in control flow, for example when you nest conditionals inside loops (more on this in the next files).

```js
// hint: try the 'variables' button
console.log('-- nested scopes --');

let outer = 'a';
{
  let inner = '-';
  {
    let innerInner = 'b';
    outer = outer + inner + innerInner;
  }
  {
    let innerInner = 'c';
    outer = outer + inner + innerInner;
  }
  outer = inner + outer + inner;
}
console.log(outer); // '-a-b-c-'
```
