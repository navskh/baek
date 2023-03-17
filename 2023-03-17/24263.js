
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  console.log(line);
  console.log(1);

  rl.close();
}).on("close", function() {
  process.exit();
});