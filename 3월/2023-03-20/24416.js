const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let input = parseInt(line);

  let recursive = Recursive(input);
  let dp = DP(input);

  function Recursive(input) {
    let count = 0;

    const fib = (n) => {
      if (n <= 2) {
        count++;
        return 1;
      }

      return fib(n - 1) + fib(n - 2);
    }

    fib(input);

    return count; 
  }

  function DP(input) {
    let fibarr = [0, 1, 1];
    let count = 0;

    for (let i = 3; i <= input; i++) {
      count++;
      fibarr[i] = fibarr[i - 1] + fibarr[i - 2];
    }

    return count;
  }

  console.log(`${recursive} ${dp}`);

  rl.close();
}).on("close", function() {
  process.exit();
});