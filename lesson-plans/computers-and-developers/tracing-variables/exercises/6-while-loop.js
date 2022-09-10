'use strict';

let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

let b = '';
while (b.length < a.length * 3) {
  b = b + a;
}

console.log(b);
