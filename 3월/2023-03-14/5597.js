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
    let totalStu = Array.from({ length: 30 }, (v, i) => i + 1);
    let filtered = totalStu;

    input.forEach((ele) => {
      filtered = filtered.filter(stu => stu != ele);
    })

    let answer = filtered.join('\n');

    console.log(answer);

  process.exit();
});