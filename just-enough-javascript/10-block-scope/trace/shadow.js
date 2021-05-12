let greeting = 'hello';

{
  let greeting = 'hello';
  greeting = 'bye';
}

console.log(greeting === 'hello'); // true
