let frog = 'frog';

let coolThing = '';

while (true) {
  coolThing = prompt('tell me something about frogs');

  if (coolThing === '' || coolThing === null) {
    alert('that is not something');
    continue;
  }

  if (coolThing.toLowerCase().includes(frog)) {
    break;
  }

  alert('nope, not about frogs.  try again.');
}

alert('i just learned something cool about frogs!\n\n- "' + coolThing + '"');
