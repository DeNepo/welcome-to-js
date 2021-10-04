'use strict';

let a = 2;
let b = 1;
let temp;

temp = b;
b = a;
a = temp;

console.log('a:', a); // 1
console.log('b:', b); // 2
console.log('temp:', temp); // ?
