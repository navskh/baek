
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let input = parseInt(line);
  let count = 0;

  while (true) {
    if (input % 5 == 0) {
      count += input / 5;
      break;
    }
    input -= 3;
    count++;

    if (input < 0) {
      count = -1;
      break;
    }
    if (input == 0) break;
  }

  console.log(count);

  rl.close();
}).on("close", function() {
  process.exit();
});