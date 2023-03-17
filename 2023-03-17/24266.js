
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let num = BigInt(line);
  console.log(`{num * num * num}`);
  console.log(3);

  rl.close();
}).on("close", function() {
  process.exit();
});