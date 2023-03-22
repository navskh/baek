const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	input.shift();
	input = input.map(val => val.split(' ').map(ele => Number(ele)));

	for (let i = 1; i < input.length; i++) {
		input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
		input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
		input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2];
	}

	console.log(Math.min(...input[input.length - 1]));
	process.exit();
});
