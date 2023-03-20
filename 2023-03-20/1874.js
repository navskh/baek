const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const limit = input.shift();
	let answer = [];
	let stack = [];
	let stackNum = 1;

  for (let i = 0; i < limit; i++) {
		let num = parseInt(input[i]);
    while (stackNum <= num) {
			stack.push(stackNum);
			stackNum++;
			answer.push('+');
    }
		let stackPop = stack.pop();
		answer.push('-');
		if (stackPop !== num) {
			answer = ['NO'];
			break;
		}
	}
  console.log(answer.join('\n'));
	process.exit();
});
