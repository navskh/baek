
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let inputArr = line.split(' ').map(x => parseInt(x));
  let up = inputArr[0];
  let down = inputArr[1];
  let goal = inputArr[2];

  console.log(Math.ceil((goal - down) / (up - down)));
  

  rl.close();
}).on("close", function() {
  process.exit();
});