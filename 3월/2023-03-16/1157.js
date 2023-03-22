
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let strArr = line.toUpperCase().split('');
  let tempArr = [];
  let tempObj = {};
  strArr.forEach(ele => {
    // 있으면 cnt + 1
    if (tempArr.indexOf(ele) > -1) {
      tempObj[ele] += 1;
    }
    // 없으면 넣기
    else {
      tempObj[ele] = 1;
      tempArr.push(ele);
    }
  })

  let tempValue = 0;
  let answer = '';
  for (var prop in tempObj) {
    if (tempObj[prop] > tempValue) {
      tempValue = tempObj[prop];
      answer = prop;
    }
    else if (tempObj[prop] == tempValue) {
      answer = '?'
    }
  }

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});