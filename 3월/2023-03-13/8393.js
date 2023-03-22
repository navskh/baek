// 예제 입력이 한줄로 되어 있을 때
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let result = 0;
  for (let i = 0; i < line; i++) {
    result += i + 1;
  }

  console.log(result);

  rl.close();
}).on("close", function() {
  process.exit();
});
