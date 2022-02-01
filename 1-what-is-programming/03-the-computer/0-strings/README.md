# Strings

The examples and exercises in this chapter will only use _string_ data, the type
used to store text. Every string value must begin and end with quotes:

```js
'use strict';

console.log('this is a string');
console.log('this IS ALSO a "string" !!!');

// you can use '\n' to make a new line inside a string
console.log('line 1 \nline 2 \nline 3');

// an empty string, but still a string!
console.log('');
```

There are more data types in JavaScript but for now you only need to know about
strings.

## String Concatenation

The `_ + _` operator combines two string values into one string value:

```js
'use strict';

// combines multiple strings into a single string
// the "trace" button will help see the difference

// logs the 3 strings separately
console.log('a', 'b', 'c');

// combines 2 strings into 1 string then prints 1 string
// this happens in one step:
//  'a' + 'b' -> 'ab'
console.log('a' + 'b');

// combines 3 strings into 1 string then prints 1 string
// this happens in two steps:
//  'a' + 'b' -> 'ab'
//  'ab' + 'c' -> 'abc'
console.log('a' + 'b' + 'c');
```
