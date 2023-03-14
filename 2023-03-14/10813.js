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
  let thisArr = input[0].split(' ');
  let bowlNum = thisArr[0];
  let endCase = thisArr[1];


  let answerArr = Array.from({length: bowlNum}, (v, i) => i + 1);

  let sampleArr = input.slice(1, endCase + 1);
  sampleArr.forEach((ele) => {
    let thisArr = ele.split(' ');
    let a = thisArr[0] - 1;
    let b = thisArr[1] - 1;

    let temp = 0;
  
    temp = answerArr[a];
    answerArr[a] = answerArr[b];
    answerArr[b] = temp;
  })

  let answer = answerArr.join(' ');
  console.log(answer);

  process.exit();
});