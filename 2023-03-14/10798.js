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
    let totalArr = [];
    input.forEach(ele => {
      let strArr = ele.split('');
      totalArr.push(strArr);
    })

    let answer = '';
    let lengthArr = totalArr.map(ele => ele.length);
    let maxLength = Math.max(...lengthArr);
    for (let i = 0; i < maxLength; i++){
      for (let j = 0; j < totalArr.length; j++){
        if (totalArr[j][i] == undefined) continue;
        answer += totalArr[j][i];
      }
    }

    console.log(answer);
  process.exit();
  });
