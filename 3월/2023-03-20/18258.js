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
    let arr = [];

    let answer = '';
    input.forEach(str => {
      let thisA = str.split(' ')
      let cmd = thisA[0];
      if (cmd == 'push') {
        let num = +thisA[1];
        arr.push(num);
      }
      else if (cmd == 'front') {
        if (arr.length == 0) answer += '-1\n';
        else answer += arr[0] + '\n';
      }
      else if (cmd == 'back') {
        if (arr.length == 0) answer += '-1\n';
        else answer += arr[arr.length - 1] + '\n';
      }
      else if (cmd == 'size') answer += arr.length + '\n';
      else if (cmd == 'empty') answer += arr.length == 0 ? '1\n' : '0\n';
      else if (cmd == 'pop') {
        if (arr.length == 0) answer += '-1\n';
        else {
          answer += arr[0] + '\n';
          arr.shift();
        }
      }
    })

    console.log(answer);
  process.exit();
});