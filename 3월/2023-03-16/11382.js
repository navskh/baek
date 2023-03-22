
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(x => parseInt(x));
  let answer = 0;
  inputArr.forEach(ele => {
    answer += ele;
  });

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});