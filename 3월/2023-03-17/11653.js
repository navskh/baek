
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  function primeFactors(n) {
    let answer = '';
    // 2의 배수 제거
    while (n % 2 == 0) {
        answer += 2 + '\n';
        n = n/2
    }
    // 3 이상 배수 제거
    for (var i=3;i*i <= n;i=i+2) {
        while (n%i==0) {
          answer += i + '\n';
            n = n/i
        }
    }
    if (n>2) {
          answer += n + '\n';
    }

    return answer;
  }
  let result = primeFactors(parseInt(line));

  console.log(result);

  rl.close();
}).on("close", function() {
  process.exit();
});