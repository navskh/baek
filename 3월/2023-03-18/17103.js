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

  let maxNum = Math.max(...input);
  let ans = "";

  // maxNum까지의 소수 구하기
  let prime = new Array(maxNum + 1).fill(true);
  prime[0] = false;
  prime[1] = false;

  for(let i = 2; i <= (maxNum / 2); i++){
      if(prime[i]){
          for(let j = 2; j <= (maxNum / i); j++){
              prime[i * j] = false;
          }
      }
  }

  // 골드바흐 파티션
  input.forEach((item) => { 
      // 각 케이스에 대한 정답 개수를 측정하기 위함.
      let count = 0;
      
      for(let i = 2; i <= (item / 2); i++){        
          if(prime[i] && prime[item - i]){
              count++;
          }
      }
      
      ans += `${count}\n`;
  })

  console.log(ans);
  process.exit();
});

