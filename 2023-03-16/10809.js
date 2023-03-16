
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

rl.on('line', function (line) {
  let answer = '';
  arr.forEach(ele => {
    answer += line.indexOf(ele) + ' ';
  })

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});