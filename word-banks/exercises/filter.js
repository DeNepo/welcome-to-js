/*
  unused:
    filteredText
    keepIt
    unfilteredText
  used:
*/

let unfilteredText = null;
while (unfilteredText === null) {
  unfilteredText = prompt('enter some text to filter');
}

let filteredText = '';
for (let character of _) {
  let keepIt = confirm('do you want to keep "' + character + '"?');
  if (_) {
    _ = _ + character;
  }
}

alert(filteredText);

/* -- errors --

*/
