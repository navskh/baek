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
    let inputArr = input[0].split(' ').map(Number);
    let n = inputArr[0];
    let k = inputArr[1];
    input.shift();

    
    let result = 0;
    while (input.length > 0 && k > 0) {
      let num = parseInt(input.pop());
      while (num <= k && k > 0) {
        k = k - num;
        result++;
      }
    }

    console.log(result);
  process.exit();
});