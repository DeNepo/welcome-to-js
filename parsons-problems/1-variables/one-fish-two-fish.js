/* this exercise has 3 distracting lines */

/*
  declare a variable named "phrase"
  then add one word at a time to create the phrase:

  one fish two fish
*/

/* -- declare initial value -- */

let phrase = '';

/* -- one fish -- */

phrase += 'fish';

phrase += 'one ' + phrase;

/* -- two fish -- */

phrase += phrase + ' two ';

phrase += 'fish';

/* -- log it -- */

console.log(phrase); // 'one fish two fish'

// begin distractors

phrase += 'fish'; // distractor

phrase = 'one ' + phrase; // distractor

phrase === phrase + ' two '; // distractor
