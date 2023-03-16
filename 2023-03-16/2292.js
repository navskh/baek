
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  // 1, 2(6*0+2)~7(6*1+1), 8(6*1+2)~19(6*3+1) , 20~37(6*6+1), 38~61(6*10+1)
  let range = 1;
  let block = 1;

  while (range < line) {
    range += 6 * block;
    block++;
  }

  console.log(block);

  rl.close();
}).on("close", function() {
  process.exit();
});