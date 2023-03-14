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
    let Testcase = input[0];
    
    let sample = input.slice(1, Testcase + 1);
    let percentArr = [];
    sample.forEach(ele => {
      let thisArr = ele.split(' ');
      let count = thisArr[0];
      let score = thisArr.slice(1, count + 1).map(x => parseInt(x));
      let sumVaue = score.reduce((sum, curr) => {
        return sum + curr;
      }, 0);
      let avg = sumVaue / score.length;
      let goodScore = score.filter(ele => ele > avg).length;
      let percent = ((goodScore / score.length) * 100).toFixed(3);
      
      percentArr.push(percent);
    })

    let answer = '';
    percentArr.forEach(ele => {
      answer += ele + '%\n';
    })
    console.log(answer);
  process.exit();
});
