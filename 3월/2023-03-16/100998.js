
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(x => parseInt(x));
  let answer = '';

  answer += inputArr[0] + inputArr[1] + '\n';
  answer += inputArr[0] - inputArr[1] + '\n';
  answer += inputArr[0] * inputArr[1] + '\n';
  answer += parseInt(inputArr[0] / inputArr[1]) + '\n';
  answer += inputArr[0] % inputArr[1] + '\n';

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});