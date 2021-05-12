alert(`Guess 3 inputs in 3 tries

  Player 1:
    enter three inputs

  Player 2:
    see the three inputs in order
    then enter them back in order
    you will get one point for each correct guess
`);

alert('Player 2: go hide');

let input1 = prompt('Player 1, enter your first input:');
let input2 = prompt('Player 1, enter your second input:');
let input3 = prompt('Player 1, enter your third input:');

alert('Player 2, get back here');

alert(
  'Player 2, remember these:' +
    '\n1. "' +
    input1 +
    '"' +
    '\n2. "' +
    input2 +
    '"' +
    '\n3. "' +
    input3 +
    '"'
);

let tally = 0;

let guess1 = prompt('Player 1, guess the first input:');
if (guess1 === input1) {
  tally = tally + 1;
}

let guess2 = prompt('Player 1, guess the second input:');
if (guess2 === input2) {
  tally = tally + 1;
}

let guess3 = prompt('Player 1, guess the third input:');
if (guess3 === input3) {
  tally = tally + 1;
}

alert('your tally: ' + tally);
