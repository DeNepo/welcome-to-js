let phrase = '';

let longEnough = false;
while (!longEnough) {
  phrase = prompt('enter anything longer than 5 characters');

  if (phrase === null) {
    alert('there is no escape');
  } else if (phrase.length <= 5) {
    alert('too short');
  } else {
    longEnough = true;
  }
}

alert('"' + phrase + '" is ' + phrase.length + ' characters long');
