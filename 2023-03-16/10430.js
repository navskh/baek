
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let inputArr = line.split(' ').map(x => parseInt(x));

  let A = inputArr[0];
  let B = inputArr[1];
  let C = inputArr[2];

  let answer = '';

  answer += (A + B) % C + '\n';
  answer += ((A % C) + (B % C)) % C + '\n';
  answer += (A * B) % C + '\n';
  answer += ((A % C) * (B % C)) % C + '\n';

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});