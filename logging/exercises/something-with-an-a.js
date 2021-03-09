let userInput = prompt('please enter something with an "a" in it');

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
} else {
  if (userInput.includes('a')) {
    alert('"' + userInput + '" is perfect!');
  } else {
    alert('"' + userInput + '" has no "a" in it');
  }
}
