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
    let str = input[0];
    let memo = Array.from({ length: str.length }, () => new Array(26).fill(0));
    
    memo[0][str.charCodeAt(0) - 97]++;

    for (let i = 1; i < str.length; i++) {
      let tmp = str.charCodeAt(i) - 97;

      for (let j = 0; j < 26; j++) {
        memo[i][j] = memo[i - 1][j];
      }
      memo[i][tmp]++;
    }

    input.shift();
    input.shift();

    let answer = '';
    input.forEach(ele => {
      let test = ele.split(' ');
      let find = test[0].charCodeAt(0);
      let s = parseInt(test[1]);
      let e = parseInt(test[2]);

      if (s == 0) {
        answer += memo[e][find - 97] + '\n';
      }
      else {
        answer += memo[e][find - 97] - memo[s-1][find - 97] + '\n';
      }
    })

    console.log(answer);
  process.exit();
});