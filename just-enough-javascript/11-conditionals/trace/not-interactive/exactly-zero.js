let value = -1;
// let value = -0.5;
// let value = 0;
// let value = 0.5;
// let value = 1;

let message;
if (value < 0) {
  message = 'too small';
} else if (value === 0) {
  message = 'perfect';
} else if (value > 0) {
  message = 'too big';
} else {
  message = 'this path is unreachable!';
}

console.log(message);
