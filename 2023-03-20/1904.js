const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let input = +line;

  let memo = [];
  
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= input; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 15746;
  }

  console.log(memo[input]);

  rl.close();
}).on("close", function() {
  process.exit();
});