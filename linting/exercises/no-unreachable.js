/* https://eslint.org/docs/rules/no-unreachable

  do not have lines of code that can never be reached
  unreachable lines make your code harder to understand and debug

*/

let input = '';

while (input === '') {
  input = prompt('input something');

  if (input === null) {
    alert('no canceling');
    continue;
  }

  if (input === '') {
    alert('nope, enter someething');
    continue;
  }

  continue;
  alert('try again');
}

alert('input: ' + input);
