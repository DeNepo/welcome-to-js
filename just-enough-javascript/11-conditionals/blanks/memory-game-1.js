/*
  unused:
    guess
    null
    thingToRemember
  used:

*/

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win'
);

if (thingToRemember !== _) {
  let guess = prompt('now try to remember what it was:');
  if (_ !== null) {
    if (guess === _) {
      alert('you win!');
    } else {
      alert('try again.');
    }
  }
}

alert('good bye');

/* -- errors --

*/
