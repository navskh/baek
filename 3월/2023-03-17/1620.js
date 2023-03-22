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
  let inputArr = input[0].split(' ').map(Number);

  let total = inputArr[0];

  input.shift();

  let map1 = new Map();
  let map2 = new Map();

  let totalP = input.slice(0, total);
  let problem = input.slice(total);

  let idx = 1;
  totalP.forEach(ele => {
    map1.set(idx, ele);
    map2.set(ele, idx);
    idx++;
  })

  let answer = '';
  problem.forEach(p => {
    if(isNaN(+p)) answer += map2.get(p) + '\n';
    else answer += map1.get(+p) + '\n';
  })

  console.log(answer);

  process.exit();
});