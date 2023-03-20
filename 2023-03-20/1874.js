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
    let index = +input[0];
    input.shift();

    let arr = Array.from({ length: index }, (v, k) => k);
    let test = [];
    let answer = '';
    let idx = 0;
    input.forEach((num) => {
      if (test.includes(num)) {
        let i = test.indexOf(num);
        for (let j = test.length; j > i; j--) {
          test.pop();
          answer += '-\n';
        }
      }
      else {
        for (let i = idx + 1; i <= num; i++) {
          test.push(arr[i]);
          answer += '+\n';
        }
        idx = num;
      }
    })
  process.exit();
});