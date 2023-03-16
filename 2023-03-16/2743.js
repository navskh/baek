
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line.length);

  rl.close();
}).on("close", function() {
  process.exit();
});