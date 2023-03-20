const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let arr = line.split(' ').map(Number);
  let len = arr[0];
  let seq = arr[1];

  let thisArr = Array.from({ length: len }, (v, k) => k + 1);

  let answer = []; 
  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= seq; j++) {
      if (j === seq) {
        answer.push(thisArr.shift());
      } else {
        thisArr.push(thisArr.shift());
      }
    }
  }

  console.log('<'+answer.join(', ')+'>')

  rl.close();
}).on("close", function() {
  process.exit();
});