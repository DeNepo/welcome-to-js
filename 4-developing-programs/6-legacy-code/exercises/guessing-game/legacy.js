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

const user = {
  option: prompt(`Welcome!
    
"play": begin the game
"-h": read the instructions
escape: exit the game`),
};

with (user) {
  if (option === '-h') {
    alert(
      `This is a two player game.

Player 1: enters a secret number, and then a clue.
Player 2: is shown the clue and must guess the number.

you can end the game at any point by canceling`,
    );
  } else if (option === 'play') {
    const game = {
      phrase: '',
      clue: '',
      guess: '',
      winner: 'no one',
    };

    alert('Player 2: look away! hide your eyes!');

    with (game) {
      while (phrase === '') {
        phrase = prompt('Player 1: enter a secret phrase');
      }

      if (phrase === null) {
        alert('good bye');
      } else {
        while (clue === '') {
          clue = prompt('Player 1: enter a clue to help guess your number');
        }

        if (clue === null) {
          alert('good bye');
        } else {
          alert(`Player 1: you entered ...
          
- number: ${phrase}
- clue: "${clue}"`);

          alert('now go get Player 2');

          while (guess === '') {
            guess = prompt(`Player 2, Here is your clue:

- "${clue}"

what do you think the secret phrase is?`);
          }

          if (guess === null) {
            alert('good bye');
          } else if (guess === phrase) {
            winner = 'Player 2';
            alert('Congrats, you were right!');
          } else {
            winner = 'Player 1';

            const revealTheSecret = confirm(`Nope, not correct.

do you want to know the secret?`);

            if (revealTheSecret) {
              alert(`The secret was:

- ${phrase}

thanks for playing, see ya`);
            } else {
              alert('better luck next time');
            }
          }
        }
      }
    }

    alert('game over. the winner is: ' + winner);
  } else if (option === null) {
    alert('good bye');
  } else {
    alert('unknown command: "' + option + '"');
  }
}
