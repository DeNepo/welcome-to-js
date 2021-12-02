'use strict';

/* users and developers

  this little program combines user interactions with developer logs
    the user will be greeted, then asked to input some data
    the user's input will be directly logged to the console

  it might seem strange that the interaction is written inside console.log
    this is because you want to directly log the value from the user
    later on, variables will make this more clear

  PS. study this program with your console open
    this way you can see everything happening in real time

*/

// alert just displays text, you cannot pass any input
alert('hello! welcome to this boring program');

// --- prompt ---

// encourage the user to explore the "ok" option
//  if they click "ok", the text is returned
console.log(
  'prompt. type & ok:',
  prompt('try this: \n1. type something \n2. click "ok"'),
);
console.log(
  'prompt. no type & ok:',
  prompt('try this: \n1. do not type \n2. click "ok"'),
);

// encourage the user to explore the "cancel" option f
//  if they click "cancel", `null` is returned
console.log(
  'prompt. type & cancel:',
  prompt('try this: \n1. type something \n2. click "cancel"'),
);
console.log(
  'prompt. no type & cancel:',
  prompt('try this: \n1. do not type \n2. click "cancel"'),
);

// --- confirm ---

//  confirm returns either true or false
console.log('confirm. ok:', confirm('please click "ok"'));
console.log('confirm. cancel:', confirm('please click "cancel"'));

alert('this program is finished, thank you for your patience');
