// #todo

'use strict';

/* https://eslint.org/docs/rules/no-unreachable-loop

  a loop that never repeats is confusing
  people expect iteration but it's really just a single line of code

*/

for (let i = 0; i <= 5; i++) {
  console.log(i);
  break;
}
