'use strict';

/* Analyze the legacy code.

  Developer:

  - Formatting:
  - Variable Names:
  - Comments:
  - Logs:

  User:

  - Clear Instructions:
  - Helpful Feedback:
  - Consistency:
  - Tone of Voice:

  Computer:

  - Variables and Types:
  - Data Input:
  - Control Flow:
  - Operations:

*/


alert(`Guess 3 phrases in 3 tries

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    you will get one point for each correct guess
`);

alert('Player 2: go hide');

let one   = prompt('Player 1, enter your first phrase:'),
    two   = prompt('Player 1, enter your second phrase:'),
    three = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

alert(`Player 2, remember these:\n1. "${one}"\n2. "${two}"\n3. "${three}"`,);

let points = 3;

if (prompt('Player 2, guess 1:') !== one) {
  points = points - 1;
}
if (prompt('Player 2, guess 2:') !== two) {
  points = points - 1;
}
if (prompt('Player 2, guess 3:') !== three) {
  points = points - 1;
}

alert("player 1's score: " + (3 - points));

alert("player 2's score: " + points);
