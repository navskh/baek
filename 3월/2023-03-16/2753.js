
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let answer = '';
  if (line % 4 == 0 && (line % 100 != 0 || line % 400 == 0)) answer = 1;
  else answer = 0;

  console.log(answer);
  rl.close();
}).on("close", function() {
  process.exit();
});