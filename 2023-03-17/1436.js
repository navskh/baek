
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {

  let goal = parseInt(line);

  let count = 1;
  let num = 666;
  while (count != goal) {
    num++;
    if (String(num).includes("666")) count++;
  }

  console.log(num);


  rl.close();
}).on("close", function() {
  process.exit();
});