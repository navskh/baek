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
  input.pop();

  let answer = '';
  input.forEach(n => {
    let cnt = 0;
    let num = parseInt(n);
    for(let i = num+1; i<=2*num; i++){
      if(isPrime(i)) cnt++;
    }
    answer += cnt + '\n';
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