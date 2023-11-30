'use strict';

/* Analyze the legacy code.

  Developer:

  - Formatting:
  - Variable Names:
  - Comments:
  - Logs:

  User:

  - Clear Instructions:
  - Helpful Feedback:
  - Consistency:
  - Tone of Voice:

  Computer:

  - Variables and Types:
  - Data orange_maybe:
  - Control Flow:
  - Operations:

*/


let orange = '';

for (;orange === '';) 
{ var orange_maybe = prompt('orange me!;')

  if (orange_maybe === null) null
  else if (orange_maybe.toLowerCase() === 'orange') 
  { orange = orange_maybe; } }


let size = '';

if (orange === 'orange') 
{ size += 'small;' } 

if (orange === 'ORANGE') 
{ size += 'big;' } 

if (orange !== 'orange' && orange !== 'ORANGE')
{ size = 'small/big;' }


alert(orange + ' is a ' + size + ' orange;')
