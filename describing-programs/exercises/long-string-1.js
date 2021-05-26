/* the program asks the user to provide an input longer or equals to 5 characters
 when the user clicks on cancel the program will show the alert "there is no escape" and will keep on asking the user for a valid input 
 if user input is anything shorter than 5 an alert will show "too short" even if the input is empty
 if user imput is equals or longer than 5 characters the program will alert the user input and the string length */

// declare a variable userInput and initialize it with the value of an empty string
let userInput = '';
// declare a variable isValid and initialized it to false (boolean value)
let isValid = false;
// checking the condition that the value of isValid is not false, necessary condition to execute the loop
while (!isValid) {
// calling prompt and request the user to input something longer than 5 characters
// assign userInput value to what user prompted
  userInput = prompt('enter anything longer than 5 characters');
// if the user clicks cancel the answer is estrictly null and the loop is going to execute over an over until the condition is different to null
  if (userInput === null) {
// an alert is showed when the user clicks cancel
    alert('there is no escape');
    continue;
  }
// checking the length of the character's number, if is less or equal to 5 the condition would be true and will show the alert "too short"
  if (userInput.length <= 5) {
    alert('too short');
    continue;
  }
// assigning the value of isValid to "true"
  isValid = true;
}
// it will show an alert with the value of userInput and the number of the characters
alert('"' + userInput + '" is ' + userInput.length + ' characters long');
