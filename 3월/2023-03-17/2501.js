
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  // 일단 약수를 구한다.
  let thisInput = line.split(' ').map(x => parseInt(x));
  let num = thisInput[0];
  let index = thisInput[1];

  let measure = [];
  let i = 1;
  while (i <= Math.sqrt(num)) {
    if (num % i == 0) {
      measure.push(i);
      if (num / i != i) measure.push(num / i);
    }
    i++;
  }

  measure.sort((a, b) => a - b);
  console.log(measure[index-1] ?? 0);

  rl.close();
}).on("close", function() {
  process.exit();
});