
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let inputVal = line.split('').sort((a, b) => { return b - a }).join('');

  console.log(inputVal);

  rl.close();
}).on("close", function() {
  process.exit();
});