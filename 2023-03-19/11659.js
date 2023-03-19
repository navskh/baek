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
  let numArr = input[1].split(' ').map(Number);

  let cumsum = new Array(numArr.length + 1).fill(0);

  numArr.forEach((ele, i) => {
    cumsum[i+1] = cumsum[i] + ele;
  });

  input.shift();
  input.shift();

  let answer = '';
  input.forEach(ele => {
    let thisArr = ele.split(' ').map(Number);
    let start = thisArr[0] -1;
    let end = thisArr[1];
    answer += cumsum[end] - cumsum[start] + '\n';
  })

  console.log(answer);
  process.exit();
});