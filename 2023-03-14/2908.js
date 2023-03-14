const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ');

  let firstNum = inputArr[0].split('').reverse().join('');
  let secondNum = inputArr[1].split('').reverse().join('');

  let answer = firstNum > secondNum ? firstNum : secondNum;
  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});