
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let input = parseInt(line);
  let answer = 0;
  for (let i = 1; i <= input; i++){
    let thisArr = i.toString().split('').map(x => parseInt(x));
    let thisSum = thisArr.reduce((sum, cur) => {
      return sum + cur;
    }, 0);

    if (i + thisSum == input) {
      answer = i;
      break;
    }
  }

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});