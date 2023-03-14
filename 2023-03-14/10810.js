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
  let numArr = input[0].split(' ');
  let endBowl = numArr[0];
  let endCase = numArr[1];
  let sampleArr = input.slice(1, endCase + 1);

  let answerArr = Array.from({length: endBowl}, ()=>0);

  sampleArr.forEach((ele) => {
    let thisArr = ele.split(' ');
    let startNum = thisArr[0] - 1;
    let endNum = thisArr[1];
    let thisNum = thisArr[2];

    for (let i = startNum; i < endNum; i++) {
      answerArr[i] = thisNum;
    }
  })

  let answer = answerArr.join(' ');
  console.log(answer);
  process.exit();
});