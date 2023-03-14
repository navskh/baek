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
  
    let scoreArr = input[1].split(' ').map(x => parseInt(x));
    let max = Math.max(...scoreArr);

    let computedArr = [];
    let idx = 0;

    scoreArr.forEach(element => {
      let computedScore = element / max * 100
      computedArr.push(computedScore);
      idx++;
    });

    let avg =
			computedArr.reduce((sum, curr) => {
				return sum + curr;
			}, 0) / computedArr.length;

    console.log(avg);


  process.exit();
});