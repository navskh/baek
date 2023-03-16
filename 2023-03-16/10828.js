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
  
    input.shift();
    let answerArr = [];
    let answer = '';

    input.forEach(ele => {
      let thisCmd = ele.split(' ');

      let cmdStr = thisCmd[0];
      let num = thisCmd.length > 1 ? thisCmd[1] : '';

      switch (cmdStr) {
        case 'push':
          answerArr.push(num);
          break;
        case 'top':
          if (answerArr.length == 0) answer += '-1' + '\n';
          else {
            answer += answerArr[answerArr.length - 1] + '\n';
          }
          break;
        case 'size':
          answer += answerArr.length + '\n';
          break;
        case 'empty':
          answer += answerArr.length == 0 ? 1 + '\n' : 0 + '\n';
          break;
        case 'pop':
          if (answerArr.length == 0) answer += '-1' + '\n';
          else {
            let popNum = answerArr[answerArr.length - 1];
            answer += popNum + '\n';
            answerArr.pop();
          }
          break;
      }
    })
    console.log(answer);
  
  process.exit();
});