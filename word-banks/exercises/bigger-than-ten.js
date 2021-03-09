/*
  unused:
    Number
    isNaN
    userNumber
    userInput
  used:

*/

let userInput = prompt('please enter a number greater than 10');

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
} else {
  let userNumber = _(userInput);

  let qualityControl = '';
  if (Number._(_)) {
    qualityControl = '"' + userInput + '" is not a number';
  } else if (userNumber <= 10) {
    qualityControl = userNumber + ' is less than 10';
  } else {
    qualityControl = userNumber + ' is perfect!';
  }
  alert(qualityControl);
}

/* -- errors --

*/
