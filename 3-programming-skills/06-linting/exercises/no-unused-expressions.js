// #todo

'use strict';

/* https://eslint.org/docs/rules/no-unused-expressions

  having extra code that does not do anything can be confusing
  this lint warning usually happens because of a mistake

*/

let likesApples = confirm('do you like apples?');

let greeting = 'hello, ';
if (likesApples) {
  greeting + 'welcome to my apple garden';
} else {
  greeting + 'welcome to my orange garden';
}

alert(greeting);
