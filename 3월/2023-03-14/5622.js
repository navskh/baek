const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var alpabet = [
  '',
  '',
  'ABC',
  'DEF',
  'GHI',
  'JKL',
  'MNO',
  'PQRS',
  'TUV',
  'WXYZ'
];

rl.on('line', function (line) {
  let answerArr = [];
  line.split('').forEach(ele => {
    alpabet.forEach((a, idx) => {
      if (a.indexOf(ele) > -1) {
        answerArr.push(idx + 1);
      }
    })
  })
  
  let answer = answerArr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
  console.log(answer);
  rl.close();
}).on("close", function() {
  process.exit();
});