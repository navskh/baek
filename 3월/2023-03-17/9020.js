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
    // 소수 true 배열만들기 (에라토스테네스의 체)
    function makePrimeArr(n) {
      const arr = [];
      // 1. 배열 초기화 모두 true
      for (let i = 0; i < n + 1; i += 1) {
          arr.push(true);
      }
      // 2. 배열 거르기 (2의 배수, 3의 배수 .. 제곱근까지)
      for (let i = 2; i * i <= n; i += 1) {
          if (arr[i]) {
              for (let j = i * i; j <= n; j += i) {
                  arr[j] = false;
              }
          }
      }

      // 3. 0, 1 을 false로 만들어주기
      arr.splice(0, 2, false, false);
      return arr;
    }

    let prime = makePrimeArr(10000);
    let answer = '';

    input.shift();
    input.forEach(thisNum => {
      for (let left = Math.ceil(thisNum / 2); left > 1; left++){
        let right = thisNum - left;
        if (prime[left] && prime[right]) {
          answer += `${right} ${left}\n`;
          break;
        }
      }
    })

    console.log(answer);
  process.exit();
});