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
  var minute = input[1] % 60;

  // 2. 걸리는 시간 더해주기
  var thisTime = input[0].split(' ').map(x => parseInt(x));
  
  let computedHour, computedMin
  let addedHour = 0;
  
  if (parseInt(thisTime[1] + minute) >= 60) {
    computedMin = parseInt(thisTime[1] + minute) - 60
    addedHour += 1;
  }
  else { 
    computedMin = parseInt(thisTime[1] + minute);
  }

  if (thisTime[0] + hour + addedHour >= 24) {
    computedHour = thisTime[0] + hour - 24 + addedHour; 
  }
  else {
    computedHour = thisTime[0] + hour + addedHour;
  } 

  console.log(computedHour + ' ' + computedMin);
  process.exit();
});