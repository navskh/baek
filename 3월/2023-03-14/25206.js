const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

let grade = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
}

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let totalRatio = 0;
    let totalScore = 0;
    input.forEach(ele => {
      let thisArr = ele.split(' ');
      let subject = thisArr[0];
      let ratio = parseInt(thisArr[1]);
      let score = thisArr[2];

      if (score != 'P') {
        totalRatio += ratio;
        totalScore += Number(grade[score] * ratio);
      }
    })

    let answer = totalScore / totalRatio;

    console.log(answer);
  process.exit();
});
