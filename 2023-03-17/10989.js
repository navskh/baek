const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
})
  .on('close', function () {
    input.shift();
    input.sort((a, b) => a - b);
    console.log(input.join('\n'));
  process.exit();
});