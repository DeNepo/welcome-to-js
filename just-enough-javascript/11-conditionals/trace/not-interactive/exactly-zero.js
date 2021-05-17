let toCompare = -1;
// let toCompare = -0.5;
// let toCompare = 0;
// let toCompare = 0.5;
// let toCompare = 1;

let message;
if (toCompare < 0) {
  message = 'too small';
} else if (toCompare === 0) {
  message = 'perfect';
} else if (toCompare > 0) {
  message = 'too big';
} else {
  message = 'huh?';
}

console.log(message);
