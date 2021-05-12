# Booleans

A primitive type with two values: `true` and `false`.

These are helpful for making decisions in your programs, it's like asking `yes` or `no`.

```js
console.log('-- booleans --');

// there are only two boolean values:
console.log(true); // true
console.log(false); // false
```

<details>
<summary>🥚 typeof</summary>

```js
console.log('-- typeof booleans --');

// they both have the type "boolean"
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
console.log('-- booleans: strict equality --');

// boolean values are only strictly equal to themselves
console.log(true === true); // true
console.log(false === false); // true

// they are not equal to each other
console.log(true === false); // false
console.log(false === true); // false

// booleans are not equal to any other type
console.log(true === 'true'); // false
console.log(false === ''); // false
console.log(true === 12); // false
console.log(false === undefined); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
console.log('-- booleans: strict inequality --');

// boolean values are strictly inequal to everything but themselves
console.log(true !== true); // false
console.log(false !== false); // false

// they are not equal to each other
console.log(true !== false); // true
console.log(false !== true); // true

// booleans are not equal to everything else
console.log(true !== 'true'); // true
console.log(false !== ''); // true
console.log(true !== 12); // true
console.log(false !== undefined); // true
```

</details>
<details>
<summary>🥚 not</summary>

```js
console.log('-- not --');

// you can use ! to reverse true and false
console.log(!true); // false
console.log(!false); // true
```

</details>
<details>
<summary>🐣 and</summary>

```js
console.log('-- and --');

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

</details>
<details>
<summary>🐣 or</summary>

```js
console.log('-- or --');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

</details>
