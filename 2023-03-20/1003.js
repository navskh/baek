const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const len = input.shift();

	for (let i = 0; i < len; i++) {
		const n = input[i];
		const fibonacci = [
			[1, 0],
			[0, 1],
		];
		for (let j = 2; j <= n; j++) {
			fibonacci[j] = [
				fibonacci[j - 1][0] + fibonacci[j - 2][0],
				fibonacci[j - 1][1] + fibonacci[j - 2][1],
			];
		}
		console.log(fibonacci[n].join(' '));
	}
	process.exit();
});
