
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(Number);

  let a = inputArr[0];
  let b = inputArr[1];
  let c = inputArr[2];
  let d = inputArr[3];
  let e = inputArr[4];
  let f = inputArr[5];

  let answer = '';
  for(let x= -999; x<1000; x++) {
    for(let y= -999; y<1000; y++){
      if(c - (a * x + b * y) == 0 && f - (d*x + e*y) == 0 ) answer = x + ' ' + y;
    }
  }

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});