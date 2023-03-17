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
    let arr = input[0].split(' ').map(x => parseInt(x));
    let a1 = arr[0];
    let a0 = arr[1];

    let c = parseInt(input[1]);
    let n = parseInt(input[2]);

    a1 * n + a0 <= c * n && c >= a1 ? console.log(1) : console.log(0);

  process.exit();
});