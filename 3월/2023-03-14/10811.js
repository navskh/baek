const readline = require('readline');
const { start } = require('repl');

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

  let answerArr = Array.from({length: endBowl}, (v,i)=>i+1);

  sampleArr.forEach((ele) => {
    let thisArr = ele.split(' ');
    let startNum = thisArr[0] - 1;
    let endNum = thisArr[1];

    let reverseArr = answerArr.slice(startNum, endNum).reverse();

    answerArr.splice(startNum, endNum - startNum, ...reverseArr);
  })

  let answer = answerArr.join(' ');
  console.log(answer);
  process.exit();
});