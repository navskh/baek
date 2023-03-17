const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
.on('close', function () {
  input.pop();
  let answer = '';
  input.forEach(ele => {
    let thisArr = ele.split(' ').map(x => parseInt(x));
    let a = thisArr[0];
    let b = thisArr[1];

    if (a % b == 0) answer += 'multiple';
    else if (b % a == 0)
      answer += 'factor';
    else answer += 'neither';

    answer += '\n';
  })

  console.log(answer);
  process.exit();
});