/*

  unused:
    prompt
    break
    continue
    confirm
    alert
  used:

*/

while (true) {
  let didAgree = _('do you agree to our terms of service?');
  if (didAgree === true) {
    alert('welcome to social media!');
    _;
  }

  alert('not an option, you must agree');
}

/* -- errors --

*/
