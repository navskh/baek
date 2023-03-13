const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
.on('close', function () {
  let thisNum = input[0].split(' ');
  let number = thisNum[0];
  let cutNum = thisNum[1];

  let scoreArr = input[1].split(' ').sort((a, b) => {
    return b - a;
  });

  let answer = scoreArr[cutNum - 1];
  console.log(answer);
  process.exit();
});
