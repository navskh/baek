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
  let word = input[0];
  let index = input[1];

  console.log(word[index-1]);
  process.exit();
});