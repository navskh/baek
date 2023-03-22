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
  // 1. 걸리는 시간을 시간 단위로 변경
  var hour = parseInt(input[1]/ 60);
  var minute = parseInt(input[1] % 60);

  // 2. 걸리는 시간 더해주기
  var thisTime = input[0].split(' ').map(x => parseInt(x));
  
  var computedHour = thisTime[0] + hour;
  var computedMin = thisTime[1] + minute;
  if (computedMin >= 60) {
    computedMin = computedMin - 60;
    computedHour += 1;
  }
  if (computedHour >= 24) {
    computedHour -= 24;
  }

  console.log(computedHour + ' ' + computedMin);
  process.exit();
});