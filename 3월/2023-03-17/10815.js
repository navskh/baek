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
    let list = new Set(input[1].split(' ').map(Number));
    let card = new Set(input[3].split(' ').map(Number));

    let answer = '';
    card.forEach(element => {
      if (list.has(element)) answer += 1 + ' ';
      else answer += 0 + ' ';
    });

    console.log(answer);
  process.exit();
});