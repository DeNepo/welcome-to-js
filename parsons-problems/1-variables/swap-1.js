/* Double Swap 2

  rearrange the lines of code so the logs are correct

*/

/* declare initial values */
let a = 'y';
let b = 'x';
let temp = null;

/* swap values */
temp = a;
a = b;
b = temp;

/* log final values */
console.log('a should be "x":', a === 'x');
console.log('b should be "y":', b === 'y');
console.log('temp should be "y":', temp === 'y');
