const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const N = +input[0];
	input.shift();
	let arr = input;
	const dp = [];
	for (let i = 0; i < N; i++) {
		dp.push(arr[i].split(' ').map(v => +v));
	}

	for (let i = 1; i < N; i++) {
		for (let j = 0; j <= i; j++) {
			let prev;
			if (j === 0) prev = dp[i - 1][j];
			else if (j === i) prev = dp[i - 1][j - 1];
			else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
			dp[i][j] += prev;
		}
	}
	console.log(Math.max(...dp[N - 1]));

	process.exit();
});

