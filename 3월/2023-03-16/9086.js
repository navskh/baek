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
    let answer = '';
    input.forEach(ele => {
      answer += ele[0] + ele[ele.length - 1] + '\n';
    })

    console.log(answer);
  process.exit();
});