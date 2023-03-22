
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(x => parseInt(x));

  let answer = '';

  if (inputArr[0] > inputArr[1]) answer = '>';
  else if (inputArr[0] < inputArr[1]) answer = '<';
  else if (inputArr[0] == inputArr[1]) answer = '==';

  console.log(answer);
  rl.close();
}).on("close", function() {
  process.exit();
});