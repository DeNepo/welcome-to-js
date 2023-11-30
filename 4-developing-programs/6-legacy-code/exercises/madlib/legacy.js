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


alert(renderMadlib(['noun', 'adjective', 'verb'], madlib));

function renderMadlib(wordTypes = [], madlib) {
  const words = [];
  for (const wordType of wordTypes) {
    let nextWord = null;
    while (nextWord === null)  nextWord = prompt(`enter an ${wordType}`);
    words.push(nextWord);
  }
  return madlib(...words);
}

function madlib(noun = '', adjective = '', verb = '') {
  return `The ${adjective} ${noun} likes to ${verb}.`;
}
