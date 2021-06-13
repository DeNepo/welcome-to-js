'use strict';

let animal = null;
while (animal === null) {
  animal = prompt('enter an animal');
}

for (let letter of animal) {
  alert(letter);
}

alert(animal + '!');
