/*
  hint:
    'asdf' -> 'asdf|fdsa'
    'i go fast' -> 'i go fast|tsaf og i'
    'racecar' -> 'racecar|racecar'

  unused:
    character
    mirrored
  used

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (let character of text) {
  _ = _ + _ + _;
}

alert(mirrored);

/* -- errors --

*/
