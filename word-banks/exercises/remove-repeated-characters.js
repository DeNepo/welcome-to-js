/*
  unused:
    replace
    includes
    character
    phrase
  used:

*/

let phrase = '';
while (phrase === '' || phrase === null) {
  phrase = prompt('enter some text');
}

let repeated = '';
let notRepeated = '';

for (let _ of _) {
  if (repeated._(character)) {
    continue;
  }
  if (notRepeated._(character)) {
    notRepeated = notRepeated._(character, '');
    repeated = repeated + _;
  } else {
    notRepeated = notRepeated + _;
  }
}

alert(
  '"' + phrase + '"\nrepeated: ' + repeated + '\nnot repeated: ' + notRepeated
);

/* -- errors --

*/
