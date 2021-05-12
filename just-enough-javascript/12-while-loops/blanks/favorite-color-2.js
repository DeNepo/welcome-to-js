/*

  unused:
    false
    true
    message
    input
  used:

*/

let message = 'your favorite color is ';

let unconfirmed = _;
while (unconfirmed) {
  let input = prompt('what is your favorite color?');

  if (_ === null) {
    alert('there is no escape');
  } else {
    let confirmed = confirm('is this correct? "' + input + '"');
    if (confirmed === _) {
      _ = _ + input;
      unconfirmed = _;
    }
  }
}

alert(message);

/* -- error --

*/
