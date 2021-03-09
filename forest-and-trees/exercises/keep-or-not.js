let input = '';

let userConfirmed = false;
while (!userConfirmed) {
  input = prompt("enter a phrase, you'll get a chance to fix your mistakes");

  if (input === '' || input === null) {
    alert('nope, enter something');
    continue;
  }

  userConfirmed = confirm(
    'do you want to use this phrase?\n\n' + '- "' + input + '"'
  );
}

let newPhrase = '';
for (let character of input) {
  let keepIt = confirm(input + '\n\n- do you want to keep "' + character + '"');
  if (keepIt) {
    newPhrase = newPhrase + character;
  } else {
    let replacement = null;
    while (replacement === null) {
      replacement = prompt('enter a replacement for "' + character + '"');
    }
    newPhrase = newPhrase + replacement;
  }
}

alert('here is your new phrase:\n\n"' + newPhrase + '"');
