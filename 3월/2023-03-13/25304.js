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
  let result = 'Yes';
  let totalAmount = input[0];
  let number = input[1];

  let totalLength = input.length - 2;

  let computedAmount = 0;

  if (totalLength != number) {
    result = 'No';
  }
  else {
    for (let i = 0; i < number; i++) {
      var thisGoods = input[i + 2].split(' ').map(x => parseInt(x));
      computedAmount += thisGoods[0] * thisGoods[1];
    }

    if (computedAmount != totalAmount) {
    result = 'No';
    }
  }

  console.log(result);

  process.exit();
});