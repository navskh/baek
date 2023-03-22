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
    let ageArr = [];
    input.forEach(ele => {
      let thisArr = ele.split(' ');
      ageArr.push(thisArr);
    })

    ageArr.sort((a, b) => {
      return parseInt(a[0]) - parseInt(b[0]);
    })

    let answer = '';
    ageArr.forEach(ele => {
      answer += ele.join(' ');
      answer += '\n';
    })
    console.log(answer);
  process.exit();
});