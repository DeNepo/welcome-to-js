/* Swap 2

  rearrange the lines of code so the logs are correct

  careful, there are extra lines of code!

*/

/* declare initial values */

let a = 'y';
let b = 'x';
let temp = null;

/* swap values */

temp = b;
b = a;
a = temp;

/* log final values */
console.log('a should be "x":', a === 'x');
console.log('b should be "y":', b === 'y');
console.log('temp should be "x":', temp === 'x');

let a = 'x'; // distractor
let b = 'y'; // distractor

b = temp; // distractor
temp = a; // distractor
