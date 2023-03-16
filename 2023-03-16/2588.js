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
    let number = parseInt(input[1]);
    let first = input[1].split('').map(x => parseInt(x));

    let second = parseInt(input[0]);

    let answer = '';
    answer += second * first[2] + '\n';
    answer += second * first[1] + '\n';
    answer += second * first[0] + '\n';
    answer += second * number + '\n';

    console.log(answer);

  process.exit();
});