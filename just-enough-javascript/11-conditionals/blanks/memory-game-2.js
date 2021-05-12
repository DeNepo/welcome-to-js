/*
  unused:
    guess
    null
    displayTheText
    prompt
    confirm
    thingToRemember
  used:

*/

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win'
);

if (thingToRemember !== null) {
  let displayTheText = confirm(
    'would you like to see your text one more time?'
  );
  if (_) {
    alert(_);
  }
  let guess = _('now try to remember what it was:');
  if (_ !== null && _ === thingToRemember) {
    alert('you win!');
  } else {
    alert('try again.');
  }
}

alert('good bye');

/* -- errors --

*/
