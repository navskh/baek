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
    let answer = '';
    input.forEach(ele => {
      let thisArr = ele.split(' ').map(Number);
      let x1 = thisArr[0];
      let y1 = thisArr[1];
      let r1 = thisArr[2];
      let x2 = thisArr[3];
      let y2 = thisArr[4];
      let r2 = thisArr[5];

      let distance = ((x1 - x2) ** 2) + ((y1 - y2) ** 2);

      let sumR = (r1 + r2) ** 2;
      let diffR = (r1 - r2) ** 2;

      if (distance == 0) {
        if (r1 == r2) answer += '-1\n';
        else answer += '0\n';
      }
      else {
        if (distance > sumR || distance < diffR) {
          answer += '0\n';
        }
        else if (distance == sumR || distance == diffR) {
          answer += '1\n';
        }
        else if (distance < sumR) {
          answer += '2\n'
        }
      }
    })

    console.log(answer);
  process.exit();
});