const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let input = line.split(' ').map(x => parseInt(x)).sort(function (a, b) {
    return b - a;
  });
  let first = input[0]; // 가장 큰 값
  let second = input[1];
  let third = input[2];

  let result = 0;

  if (first == second && second == third) {
    result = 10000 + first * 1000;
  }
  else if (first == second || second == third) {
    result = 1000 + second * 100;
  }
  else {
    result = first * 100;
  }

  console.log(result);

  rl.close();
}).on("close", function() {
  process.exit();
});