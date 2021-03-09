let sentence = '';

let isValid = false;
while (!isValid) {
  sentence = prompt('enter a sentence with at least 2 words');

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

sentence = sentence + ' ';

let newSentence = '';

let nextWord = '';
for (let character of sentence) {
  if (character === ' ') {
    let keep = confirm('do you want to keep this word:\n\n- ' + nextWord);
    if (keep) {
      newSentence = newSentence + character + nextWord;
    }
    nextWord = '';
  } else {
    nextWord = nextWord + character;
  }
}

alert(newSentence);
