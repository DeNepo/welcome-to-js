/*

  unused:
    length
    true
    false
    input
  used:

*/

let input = '';
let prompting = _;
while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave'
  );
  if (input === null) {
    prompting = _;
    input = 'you canceled';
  } else if (_._ > 4) {
    prompting = _;
  }
}
alert(input);

/* -- errors --

*/
