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
  let count = 0;
  input.forEach(ele => {
    const word = ele;
    let isRight = true;

    let test = [];
    let letter = word.split('');

    letter.forEach(l => {
      if (test.indexOf(l) == -1) {
        test.push(l);
      }
      else {
        if (test.indexOf(l) != test.length - 1) {
          isRight = false;
        }
      }
    })

    if (isRight) {
      count++;
    }
  })

  console.log(count);
  process.exit();
});

