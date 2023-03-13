const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	var number = input[0];
	var sample = input.slice(1, number + 1);

	var thisArr = sample.sort((a, b) => {
		return a - b;
	});

	const answer = thisArr.join('\n');
	console.log(answer);

	process.exit();
});
