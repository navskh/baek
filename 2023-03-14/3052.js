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
    let remainArr = [];
    input.forEach(ele => {
      let remain = ele % 42;
      if (remainArr.indexOf(remain) == -1) {
        remainArr.push(remain);
      }
    })

    console.log(remainArr.length);
    process.exit();
});
