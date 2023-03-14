const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = 0;
rl.on('line', function (line) {
  let thisInput = line
  let reverse = thisInput.split('').reverse().join('');

  if (thisInput == reverse) answer = 1;
  else answer = 0;

  rl.close();
}).on("close", function () {
  console.log(answer);
  process.exit();
});