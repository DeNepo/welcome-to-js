alert('you will need to input strings with "e" in the right place');

let _a = 0;

let _b = 'entries:';

while (true) {
  let _c = prompt('input a string with "e" at index ' + _a);

  if (_c === null) {
    let _d = confirm('are you sure you want to _d?');
    if (_d) {
      break;
    } else {
      continue;
    }
  }

  if (_c[_a] !== 'e') {
    _b = _b + '\nx. "' + _c + '"';
    break;
  }

  _b = _b + '\n' + _a + '. "' + _c + '"';
  _a = _a + 1;
}

alert('your score: ' + _a + '\n\n' + _b);
