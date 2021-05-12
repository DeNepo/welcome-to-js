/*
  unused:
    null
    true
    false
    prompt
    confirm
  used:

*/

let input = prompt('enter something');

let response = ':(';
if (input !== _) {
  let didConfirm = _('is this what you meant to input?\n-> ' + input);
  if (didConfirm === _) {
    response = 'great!';
  } else {
    response = 'try again';
  }
}

alert(response);

/* -- error --

*/
