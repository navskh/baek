
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const result = BigInt(line) * BigInt(line - 1) * BigInt(line - 2) / BigInt(6);
  console.log(`${result}\n${3}`);

  rl.close();
}).on("close", function() {
  process.exit();
});