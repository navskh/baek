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
    let num = +input[0].split(' ')[1];
    let arr = input[1].split(' ').map(Number);

    let answer = 0;

    let sum = [];
    let test = new Array(num).fill(0);
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) sum[i] = arr[i];
      else {
        sum[i] = sum[i - 1] + arr[i];
      }

      let remain = sum[i] % num;
      if (remain == 0) answer++;
      answer += test[remain];
      test[remain]++;
    }

    console.log(answer);
  process.exit();
});