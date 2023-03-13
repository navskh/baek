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
  let thisArr = input[1].split(' ');

  let maxValue = Math.max(...thisArr);
  let minValue = Math.min(...thisArr);

  let answer = `${minValue} ${maxValue}`
  console.log(answer);
  
  process.exit();
});