
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let arr = [];
  for (let i = 1; i <= line; i++) {
    arr.push(" ".repeat(line - i) + "*".repeat(2 * i - 1));
  }

  let answer = '';
  let arr2 = arr.slice().reverse().slice(1, line);
  answer += arr.concat(arr2).join('\n');
  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});