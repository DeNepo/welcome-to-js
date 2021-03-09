/*
  which body will pass the assertion?
*/

let count = 0;
for (let i = 0; i < 5; i = i + 1) {
  count = count + i;
}
console.log(count === 10);

// begin distractors

count = count; // distractor
count = i; // distractor
count = count + 1; // distractor
