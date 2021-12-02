// prim SC
'use strict';

// --- conditionals ---

// kw id op prim SC
let name = 'Robert';

// kw OP id D id op prim CP OCB
if (name.length === 5) {
  // id oper id op prim SC
  name = name + ' :)';
  // CCB kw OCB
} else {
  // id op id op prim SC
  name = name + ' :(';
  // CCB
}

// --- while loops ---

// kw id op prim SC
let dots = '';

// kw OP id op prim CP OCB
while (dots !== '...') {
  // id op id op prim SC
  dots = dots + '.';
  // CCB
}
