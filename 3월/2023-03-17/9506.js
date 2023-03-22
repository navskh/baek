
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
}).on("close", function () {
  input.pop();
  let answer = '';
  input.forEach(line => {
    // 일단 약수를 구한다.
    let thisInput = line.split(' ').map(x => parseInt(x));
    let num = thisInput[0];
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

    measure.pop();

    let sum = measure.reduce((s, c) => {
      return s + c;
    }, 0);

    if (sum == num) {
      answer += num + ' = ';
      measure.forEach((e, idx) => {
        if (idx == measure.length - 1) answer += e;
        else answer += e + ' + ';
      })
      answer += '\n';
    }
    else {
      answer += `${num} is NOT perfect. \n`;
    }
  })
  console.log(answer);
  process.exit();
});