// 예제 입력이 여러줄로 되어 있을 떼
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
  for (let i = 0; i < input.length; i++) {
    var thisInput = input[i].split(' ').map(x=>parseInt(x));
    console.log(thisInput[0] + thisInput[1]);
  }
  process.exit();
});