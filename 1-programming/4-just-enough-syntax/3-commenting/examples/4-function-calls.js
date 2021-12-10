// prim SC
'use strict';

/* --- gather user input --- */

// kw id op prim SC
let input = null;

// kw OP id op prim CP OCB
while (input === null) {
  // id op id OP prim CP SC
  input = prompt('type nothing and click "enter"');
  // id D id OP id CP SC
  console.log(input);
  // CCB
}

/* --- display a message to the user --- */

// kw OP id oper prim CP OCB
if (input === '') {
  // id OP prim CP SC
  alert('thank you for nothing!');
  // CCB kw OCB
} else {
  // id OP prim op id CP SC
  alert('this is not nothing: ' + input);
  // CCB
}
