
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let num = line.split(' ').map(Number);
  let start = num[0];
  let end = num[1];

  let answer= [];
  for(let i=start; i<=end; i++){
    if(isPrime(i)) answer.push(i);
  }

  console.log(answer.join('\n'));

  function isPrime(n) {
    let N = Number(n);
    if (N == 1 || N == 0) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) return false;
    }
    return true;
  }
  rl.close();
}).on("close", function() {
  process.exit();
});