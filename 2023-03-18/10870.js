
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  function fibo(n) {
    if(n == 1) return 1;
    if(n == 0) return 0;
    else {
      return fibo(n-1) + fibo(n-2);
    }
  }

  let input = parseInt(line);
  console.log(fibo(input));

  rl.close();
}).on("close", function() {
  process.exit();
});