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
    let thisInput = input[0].split(' ').map(Number);

    let cnt = thisInput[0];
    let cand = thisInput[1];

    input.shift();

    let cntArr = input.slice(0, cnt);
    let listArr = input.slice(cnt);

    let set = new Set(cntArr);

    let answer = 0;
    listArr.forEach(ele => {
      if (set.has(ele)) {
        answer++;
      }
    })

    console.log(answer);

  process.exit();
});