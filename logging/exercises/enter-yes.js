let input = prompt('enter the word "yes", upper or lower case');

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}

alert(reaction);
