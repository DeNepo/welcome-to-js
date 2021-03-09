let input = '';

while (true) {
  input = prompt('enter a word to spell:');

  if (input === '' || input === null) {
    alert('nope, enter something');
    continue;
  }

  let userConfirmed = confirm(
    'do you want to spell this word?\n\n' + '- "' + input + '"'
  );
  if (userConfirmed) {
    break;
  }
}

let oneByOne = 'all spelled out:\n';
for (let i = 0; i < input.length; i = i + 1) {
  let nextLetter = input[i];
  oneByOne = oneByOne + '\n- ' + nextLetter;
}

alert(oneByOne);
