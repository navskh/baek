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

  let set1 = new Set(input[1].split(' ').map(Number));
  let set2 = new Set(input[2].split(' ').map(Number));

  let answer = new Set([...set1, ...set2]);

  set1.forEach(ele => {
    if(set2.has(ele)) answer.delete(ele);
  })

  console.log(answer.size);
  process.exit();
});