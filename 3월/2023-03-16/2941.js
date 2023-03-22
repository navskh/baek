
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [
  'c=',
  'c-',
  'dz=',
  'd-',
  'lj',
  'nj',
  's=',
  'z=',
];

rl.on('line', function (line) {
  let inputArr = line.split('');
  let count = 0;
  for (let i = 0; i < inputArr.length; i++) {
    // 있으면 하나로 침.
    if (arr.indexOf(line[i] + line[i + 1] + line[i + 2]) > -1) {
      count++;
      i = i+2;
    }
    else if (arr.indexOf(line[i] + line[i + 1]) > -1) {
      count++;
      i++;
    }
    else {
      count++;
    }
  }

  console.log(count);

  rl.close();
}).on("close", function() {
  process.exit();
});