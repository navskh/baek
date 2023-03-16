
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {

  let rev = line.split('').reverse().join('');

  console.log(rev == line ? 1 : 0);



  rl.close();
}).on("close", function() {
  process.exit();
});