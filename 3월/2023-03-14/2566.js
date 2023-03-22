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
  let maxArr = [];
  let idxArr = [];
  input.forEach(ele => {
    let thisArr = ele.split(' ').map(x => parseInt(x));
    let maxValue = Math.max(...thisArr);
    let maxIdx = thisArr.indexOf(maxValue);

    maxArr.push(maxValue);
    idxArr.push(maxIdx);
  })

  let maxResult = Math.max(...maxArr);
  let idx = maxArr.indexOf(maxResult);
  let row = idxArr[idx];

  let answer = '';
  answer += maxResult + '\n';
  answer += (parseInt(idx) + 1) + ' ' + (parseInt(row) + 1);
  console.log(answer);

  process.exit();
});