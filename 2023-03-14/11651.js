const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(x => parseInt(x)));
})
  .on('close', function () {
    input.shift();
    input.sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] == b[1]) {
        if (a[0] > b[0]) return -1;
      }
      else return 1;
    })

    let answer = '';
    input.reverse().forEach(ele =>{
      answer += ele[0] + ' ' + ele[1] + '\n';
    })
    console.log(answer);
  process.exit();
});