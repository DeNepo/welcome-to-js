/*

  unused:
    spaceless
    letter
    of
  used:

*/

let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed'
  );

  if (input === null) {
    alert('no escape');
    continue;
  }
  if (input === '') {
    alert('gotta enter something');
    continue;
  }
  if (!input.includes(' ')) {
    alert('there must be a space!');
    continue;
  }

  break;
}

let spaceless = '';
for (let letter _ input) {
  if (_ !== ' ') {
    _ = _ + letter;
  }
}

alert(input + ' -> ' + spaceless);

/* -- errors --

*/
