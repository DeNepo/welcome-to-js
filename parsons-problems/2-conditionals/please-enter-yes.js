/* this exercise has 6 distracting lines */

/* -- gather user input -- */

let input = prompt('please enter "yes"');

/* -- read the input to construct the output -- */

let output = '';
if (input.toLowerCase() === 'yes') {
  output = 'you entered "yes"';
} else {
  output = '"' + input + '" is not "yes"';
}

/* -- alert the output -- */

alert(output);


// begin distractors


if (input.toUpperCase() === 'yes') { // distractor

} else if { // distractor

if input.toLowerCase() === 'yes' { // distractor

output === 'you entered "yes"'; // distractor

output === '"' + input + '" is not "yes"'; // distractor

let output === ''; // distractor
