/* this exercise has 4 distracting lines */

/*
  declare a variable named "phrase"
  then add one word at a time to create the phrase:

  one fish two fish
*/

/* -- declare initial value -- */

let phrase = ' ';

/* -- one fish -- */

phrase = 'one' + phrase + 'fish';

/* -- two fish -- */

phrase = phrase + ' two';

phrase = phrase + ' fish';

/* -- log it -- */

console.log(phrase); // 'one fish two fish'

// begin distractors

phrase === 'one ' + phrase; // distractor

phrase === phrase + ' two'; // distractor

phrase = 'fish' + phrase; // distractor

phrase = phrase + 'fish'; // distractor
