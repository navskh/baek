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
    function isPrime(N) {
      if (N === 1) return false;
      for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return false;
      }
      return true;
    }

    let first = parseInt(input[0]);
    let second = input[1];
    let cntArr = [];
    for (let i = first; i <= second; i++) {
      if (isPrime(i)) cntArr.push(i);
    }

    let answer = '';
    let sum = cntArr.reduce((s, cur) => {
      return s + cur;
    }, 0);

    if (cntArr.length > 0) {
      answer += sum + '\n';
      answer += cntArr[0];
    }
    else {
      answer = -1
    }

    console.log(answer);
  process.exit();
});