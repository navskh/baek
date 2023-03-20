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

    let memo = [];
    memo[1] = 1;
    memo[2] = 1;
    memo[3] = 1;
    memo[4] = 2;
    memo[5] = 2;
    
    input.shift();

    let answer = '';
    input.forEach(num => {
      for (let i = 6; i <= num; i++) {
        if (memo[i]) continue;
        memo[i] = memo[i - 1] + memo[i - 5];
      }

      answer += memo[num] + '\n';
    })

    console.log(answer);
  process.exit();
});