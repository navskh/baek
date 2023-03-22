const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let number = line / 4;
  
  let answer = '';

  for (let i = 0; i < number; i++) {
    answer += 'long ';
  }

  answer += 'int';

  console.log(answer);


  rl.close();
}).on("close", function() {
  process.exit();
});