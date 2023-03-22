const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let inputArr = input[1].split(' ').map(Number);

	var dp = [inputArr[0]];
	for (var i = 1; i < inputArr.length; i++) {
		dp[i] =
			inputArr[i] > inputArr[i] + dp[i - 1]
				? inputArr[i]
				: inputArr[i] + dp[i - 1];
	}

	console.log(Math.max(...dp));

	process.exit();
});
