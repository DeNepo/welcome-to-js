/*

  unused:
    false
    true
    input
    confirm
    message
    prompt
    null
  used:

*/

let message = 'your favorite color is ';

let isEmpty = _;
while (isEmpty) {
  let input = _('what is your favorite color?');

  if (input === _) {
    alert('there is no escape');
  } else if (input.length !== 0) {
    message = _ + _;
    isEmpty = _;
  }
}

alert(message);

/* -- error --

*/
