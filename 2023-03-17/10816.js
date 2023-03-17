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
    let list = input[1].split(' ').map(Number);

    let candi = input[3].split(' ').map(Number);

    let map = new Map();

    list.forEach(element => {
      if (map.has(element)) map.set(element, map.get(element) + 1)
      else map.set(element, 1);
    });

    let answer = [];
    candi.forEach(ele => {
      if (map.has(ele)) answer.push(map.get(ele));
      else answer.push(0);
    })

    console.log(map, candi, answer);
    console.log(answer.join(' '));

  process.exit();
});