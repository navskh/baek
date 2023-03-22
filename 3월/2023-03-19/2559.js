const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let N = +input[0].split(' ')[0];
	let count = +input[0].split(' ')[1];
	let inputArr = input[1].split(' ').map(Number);

	let sum = 0;
	for (let i = 0; i < count; i++) {
		sum += inputArr[i];
	}

	let i = 0;
	let max = sum;
	for (let j = count; j < N; j++) {
		sum += inputArr[j];
		sum -= inputArr[i++];

		max = Math.max(max, sum);
	}

	console.log(max);
	process.exit();
});
