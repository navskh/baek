
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
  let numbers = input[0].split(' ').map(x => parseInt(x));
  let standardNum = numbers[1];

  let thisArr = input[1].split(' ').map(x => parseInt(x));
  let thisNumbers = thisArr.filter(ele => ele < standardNum);

  const str = thisNumbers.join(" ");
  console.log(str);
  process.exit();
});
