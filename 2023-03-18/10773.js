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
  let arr = [];
  input.forEach(ele => {
    if(ele == 0) arr.pop();
    else arr.push(ele);
  })

  let sum = arr.reduce((s, c) => {
    return s + parseInt(c);
  }, 0);

  console.log(sum);
  process.exit();
});