// 예제 입력이 한줄로 되어 있을 때
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  var thisInput = line;
  for (let i = 0; i < 9; i++) {
    console.log(`${thisInput} * ${i + 1} = ${thisInput * (i + 1)}`);
  }
  rl.close();
}).on("close", function() {
  process.exit();
});