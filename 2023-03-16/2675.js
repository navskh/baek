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

    let answer = '';
    input.forEach(ele => {
      let thisArr = ele.split(' ');
      let number = thisArr[0];
      let alpa = thisArr[1].split('');

      alpa.forEach(a => {
        for (let i = 0; i < number; i++){
          answer += a;
        }
      })
      
      answer += '\n';
    })

    console.log(answer);
  process.exit();
});