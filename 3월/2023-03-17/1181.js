const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    input.shift();

    let set = [...new Set(input)];

    set.sort((a, b) => {
      if (a.length > b.length) return 1;
      else if (a.length == b.length) { return a > b ? 1 : -1 }
      else return -1;
    });

    console.log(set.join('\n'));
  process.exit();
});