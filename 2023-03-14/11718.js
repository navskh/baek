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
  
    let answer = '';
    input.forEach(ele => {
      answer += ele + '\n';
    })
    
    console.log(answer);
  
  process.exit();
});