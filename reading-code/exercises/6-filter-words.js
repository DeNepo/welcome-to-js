/* -- gather a valid sentence from the user -- */

let sentence = '';

let isValid = false;
while (!isValid) {
  /* -- capture user input -- */

  sentence = prompt('enter a sentence with at least 2 words');

  /* -- validate user input -- */

  if (sentence === null) {
    alert('there is no escape');
  } else if (sentence.length < 3) {
    alert('"' + sentence + '" is too short to have two words');
  } else if (!sentence.includes(' ')) {
    alert('there is no space');
  } else {
    isValid = true;
  }
}

/* -- prepare input for processing -- */

sentence = sentence + ' ';

/* -- allow the user to remove unwanted words -- */

let newSentence = '';

let nextWord = '';
for (let character of sentence) {
  if (character === ' ') {
    /* -- end of word: allow user to remove the word -- */

    let keep = confirm('do you want to keep this word:\n\n- ' + nextWord);
    if (keep) {
      newSentence = newSentence + character + nextWord;
    }
    nextWord = '';
  } else {
    /* -- still building a word: append the character -- */

    nextWord = nextWord + character;
  }
}

/* -- communicate the result -- */

alert(newSentence);
