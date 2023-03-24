const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let input = +line;

  let arr = [];
  arr[0] = [];
  arr[1] = new Array(10).fill(1);

  arr[1][0] = 0;
  for (let i = 1; i < input; i++) {
    arr[i + 1] = new Array(10).fill(0);
    arr[i + 1][1] += arr[i][0] % 1000000000;
    for (let j = 1; j < arr[i].length - 1; j++) {
      arr[i + 1][j - 1] += arr[i][j] % 1000000000;
      arr[i + 1][j + 1] += arr[i][j] % 1000000000;
    }
    arr[i + 1][8] += arr[i][9] % 1000000000;
  }

  console.log(arr[input].reduce((a, v) => a + v , 0) % 1000000000);
  
  rl.close();
}).on("close", function() {
  process.exit();
});