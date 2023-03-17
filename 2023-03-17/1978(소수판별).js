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
  // 에라토스테네스의 체로 구현해보기
    
    input.shift();
    let thisArr = input[0].split(' ').map(x => parseInt(x));
    let count = 0;
    thisArr.forEach(element => {
      if (isPrime(element)) count++;
    });

    console.log(count);

    function isPrime(N) {
      if (N === 1) return false;
      for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return false;
      }
      return true;
    }
  process.exit();
});