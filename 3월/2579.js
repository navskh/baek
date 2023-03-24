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
    input.shift();

    let numArr = input.map(Number);
    let idx = 0;

    let dp = [];
    dp[0] = numArr[0];
    dp[1] = numArr[0] + numArr[1];
    dp[2] = Math.max(numArr[0] + numArr[2], numArr[1] + numArr[2]);

    for (let i = 3; i < numArr.length; i++) {
      dp[i] = Math.max(dp[i - 3] + numArr[i - 1] + numArr[i], dp[i - 2] + numArr[i]);
    }

    console.log(dp[numArr.length - 1]);
  process.exit();
});