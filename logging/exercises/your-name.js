let userInput = '';
while (true) {
  userInput = prompt('enter your name:');

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  let userDidConfirm = confirm('is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    break;
  }
}

alert('your name is: "' + userInput + '"');
