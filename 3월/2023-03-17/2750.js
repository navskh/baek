const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
})
  .on('close', function () {
    input.shift();
    let set = [... new Set(input)];
  
    set.sort((a, b) => a - b);
    console.log(set.join('\n'));
  process.exit();
});