let adjective = null;
let noun = null;
let verb = null;

while (adjective === null) {
  adjective = prompt('enter a verb');
}

let madlib = 'the ' + adjective;

while (noun === null) {
  noun = prompt('enter a noun');
}

madlib = madlib + ' ' + noun;

while (verb === null) {
  verb = prompt('enter a verb');
}

madlib = madlib + ' likes to ' + verb;

alert(madlib);
