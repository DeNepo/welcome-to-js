/*

  unused:
    prompt
    true
    confirm
    false
    alert
  used:

*/

let loggedIn = _;

while (!loggedIn) {
  let didAgree = _('do you agree to our terms of service?');
  if (didAgree === true) {
    alert('welcome to social media!');
    loggedIn = _;
  } else {
    alert('not an option, you must agree');
  }
}

/* -- errors --

*/
