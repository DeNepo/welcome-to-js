/* -- show the instructions -- */

alert(`Guess 3 phrases in 3 tries

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    you will get one point for each correct guess
`);

/* -- gather player 1's phrases -- */

alert('Player 2: go hide');

let phrase1 = prompt('Player 1, enter your first phrase:');
let phrase2 = prompt('Player 1, enter your second phrase:');
let phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

/* -- player 2 tries to remember the phrases -- */

alert(
  'Player 2, remember these:' +
    '\n1. "' +
    phrase1 +
    '"' +
    '\n2. "' +
    phrase2 +
    '"' +
    '\n3. "' +
    phrase3 +
    '"'
);

let guess1 = prompt('Player 1, guess the first phrase:');
let guess2 = prompt('Player 1, guess the second phrase:');
let guess3 = prompt('Player 1, guess the third phrase:');

/* -- player 2's score is calculated -- */

let points = 3;

if (guess1 !== phrase1) {
  points = points - 1;
}

if (guess2 !== phrase2) {
  points = points - 1;
}

if (guess3 !== phrase3) {
  points = points - 1;
}

/* -- show player 2's final score -- */

alert("player 2's score: " + points);
