// #todo

'use strict';

/* https://eslint.org/docs/rules/eqeqeq

  you should never use == or !=, instead use === and !==

  this rule will help you avoid bugs caused by implicit coercion

*/

for (let i = 0; i != 5; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
