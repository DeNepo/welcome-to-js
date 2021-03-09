/*
  unused:
    isNothing
    something
    input
  used:

*/

let something = '';

let isNothing = true;
while (_) {
  let input = prompt('enter something');

  if (_ === null) {
    alert('canceler');
    continue;
  }

  if (_ === '') {
    alert('nothing!??');
    continue;
  }

  _ = false;
  _ = input;
}

alert(something);

/* -- error --

*/
