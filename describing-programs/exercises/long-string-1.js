let userInput = '';

let isValid = false;
while (!isValid) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput === null) {
    alert('there is no escape');
    continue;
  }

  if (userInput.length <= 5) {
    alert('too short');
    continue;
  }

  isValid = true;
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');
