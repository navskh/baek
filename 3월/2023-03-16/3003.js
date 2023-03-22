
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.
// 킹, 퀸, 룩, 비숍, 나이트, 폰 (순서)
let arr = [1, 1, 2, 2, 2, 8];

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(x => parseInt(x));

  let answer = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < inputArr.length; i++) {
    answer[i] = arr[i] - inputArr[i];
  }

  console.log(answer.join(' '));
  

  rl.close();
}).on("close", function() {
  process.exit();
});
