// #todo

'use strict'; // run this code with and without 'use strict'

false.greeting = 'hello, i am a boolean';
(14).greeting = 'hello, i am a number';
'with'.greeting = 'hello, i am a string';

// even when there is no error, you can't use the properties
console.log(false.greeting);
console.log((14).greeting);
console.log('with'.greeting);
