
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let sum = 0;
  for (let i = 1; i < line; i++){
    sum += i;
  }
  console.log(sum);
  console.log(2);

  rl.close();
}).on("close", function() {
  process.exit();
});