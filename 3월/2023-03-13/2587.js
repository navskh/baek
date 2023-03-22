const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
  let thisLength = input.length;

  let sortedArr = input.sort((a, b) => {
    return a-b;
  });

  let total = 0;
  sortedArr.forEach(ele => {
    total += parseInt(ele);
  })

  let ave = total / thisLength;

  let middle = Math.floor(thisLength / 2);

  let midValue = sortedArr[middle];

  let answer = ave + '\n' + midValue;
  console.log(answer);

	process.exit();
});
