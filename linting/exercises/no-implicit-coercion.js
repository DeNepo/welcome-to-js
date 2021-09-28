/* https://eslint.org/docs/rules/no-implicit-coercion

  JavaScript has lots of sneaky ways to change types behind the scenes
  you've learned how implicit coercion works so you can understand JS

  but you should never use it in your code.
  it makes your code harder to understand

*/

let userInput = prompt('enter something or nothing');

let didInputSomething = !!userInput;

if (didInputSomething) {
  alert('you inputted something');
} else {
  alert('you inputted nothing');
}
