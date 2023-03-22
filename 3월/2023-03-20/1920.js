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
    let total = input[1].split(' ').map(Number);
    total.sort((a, b) => a - b);
    let candidate = input[3].split(' ').map(Number);

    let answer = '';
    candidate.forEach(element => {
      let start = 0;
      let end = total.length - 1;
      let yes = false;
      while (start <= end) {
        let middle = parseInt((start + end) / 2);
        if (element < total[middle]) {
          end = middle - 1;
        }
        else if (element > total[middle]) {
          start = middle + 1;
        }
        else {
          yes = true;
          break;
        }
      }
      if (yes == true) answer += '1\n';
      else answer += '0\n';
    });

    console.log(answer);
  process.exit();
});