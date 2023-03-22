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
    let answer = '';
    input.forEach(ele =>{
      let cur = BigInt(ele) - BigInt(1);
      while(true) {
        cur = BigInt(cur) + BigInt(1);
        if(isPrime(cur)) break;
      }

      answer += cur + '\n';
    })

    console.log(answer);

    function isPrime(n) {
      let N = Number(n);
      if (N == 1 || N == 0) return false;
      for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return false;
      }
      return true;
    }
  process.exit();
});