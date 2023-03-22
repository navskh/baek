const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').filter(ele => ele != '');
  console.log(inputArr.length);
  rl.close();
}).on("close", function() {
  process.exit();
});