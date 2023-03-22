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
  let answer = 0;
  input[0].split('').forEach(ele => {
    answer += parseInt(ele);
  });

  console.log(answer);
  process.exit();
});