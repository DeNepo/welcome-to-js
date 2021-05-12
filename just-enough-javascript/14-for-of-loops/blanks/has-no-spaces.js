/*

  unused:
    true
    false
    break
    continue
  used:

*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces'
  );
}

let noSpaces = _;

for (let letter of input) {
  if (letter === ' ') {
    noSpaces = _;
    _;
  }
}

if (noSpaces) {
  alert('"' + input + '" has no spaces');
} else {
  alert('"' + input + '" has at least one space');
}

/* -- errors --

*/
