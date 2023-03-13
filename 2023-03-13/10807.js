
// 예제 입력이 여러줄로 되어 있을 떼
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
  let thisArr = input[1].split(' ').map(x => parseInt(x));
  let searchNum = input[2];

  let thisNum = thisArr.filter(ele => ele == searchNum).length;

  console.log(thisNum);
  process.exit();
});
