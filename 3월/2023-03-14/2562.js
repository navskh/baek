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
  let max = 0;
  let maxIdx = 0;
  input.forEach((ele, idx) => {
    if (parseInt(ele) > parseInt(max)) {
      max = ele;
      maxIdx = idx + 1;
    }
  })

  let answer = '';
  answer += max + '\n';
  answer += maxIdx;
  console.log(answer);
  
  process.exit();
});
