/*
  unused:
    response
    input
    didConfirm
  used:

*/

let input = prompt('enter something');

let response;
if (_ === null) {
  response = ':(';
} else {
  let didConfirm = confirm('is this what you meant to input?\n-> ' + _);
  if (_ === false) {
    _ = 'try again';
  } else {
    _ = 'great!';
  }
}

alert(response);

/* -- errors --

*/
