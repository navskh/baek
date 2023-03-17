
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let input = parseInt(line);

  if(input == 0) console.log(1);

  else {
    let answer = 1;
    for(let i=1; i<=input; i++){
      answer = answer * i;
    }

    console.log(answer);
  }

  rl.close();
}).on("close", function() {
  process.exit();
});