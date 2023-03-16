
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let num = 1;
  let sum = 0;
  let input = parseInt(line);
  while (input > sum) {
    sum += num;
    num++;
  }

  let diff = sum - line + 1;
  let answer = '';
  if (num % 2 != 0) {
    answer = `${num - diff}/${num - (num - diff)}`;
  }
  else {
    answer = `${num - (num - diff)}/${num - diff}`;
  }

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});