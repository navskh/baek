
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let input = parseInt(line);
  let count = 0;
  let answer = [];
  function Hanoi(num, from, other, to){
    if(num === 0) {
      return;
    } else {
      Hanoi(num - 1 , from, to, other);
      answer.push([from, to]);
      count++;
      Hanoi(num - 1, other, from, to);
    }
  }
  
  Hanoi(input, 1, 2, 3);
  
  console.log(count);
  console.log(answer.map((element) => element.join(" ")).join("\n"));

  rl.close();
}).on("close", function() {
  process.exit();
});