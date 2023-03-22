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
  let result = '';
  input.forEach(ele => {
    let thisArr=ele.split('');
    let answer = [];
    let isNo = 0;
    thisArr.forEach(e => {
      if(e == '(') answer.push('(');
      else if(e == ')') {
        if(answer.length == 0) isNo = 1;
        else {
          answer.pop();
        }
      }
    })

    if(isNo == 1) result += 'NO';
    else{
      result += answer.length > 0 ? 'NO' : 'YES';
    }
    result += '\n';
  })
  console.log(result);

  process.exit();
});