/*

  unused:
    continue
    ' '
    letter
    input
    ''
  used:

*/

let input = null;

let hasSpaces = false;
while (!hasSpaces) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed'
  );

  if (input === null) {
    alert('no escape');
  } else if (input === '') {
    alert('gotta enter something');
  } else if (!input.includes(' ')) {
    alert('there must be a space!');
  } else {
    hasSpaces = true;
  }
}

let spaceless = _;
for (let letter of _) {
  if (letter === _) {
    _;
  }
  spaceless = spaceless + _;
}

alert(input + ' -> ' + spaceless);

/* -- errors --

*/
