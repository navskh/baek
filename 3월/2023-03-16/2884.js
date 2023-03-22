
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let inputArr = line.split(' ').map(x => parseInt(x));

  let hour, min;
  if (inputArr[1] < 45) {
    if (inputArr[0] == 0) hour = 23;
    else hour = inputArr[0] - 1;
    min = inputArr[1] + 60 - 45;
  }
  else {
    hour = inputArr[0];
    min = inputArr[1] - 45;
  }

  console.log(hour + ' ' + min);

  rl.close();
}).on("close", function() {
  process.exit();
});