const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	var cnt = Number(input[0]);
	var inputs = input[1].split(' ').map(v => Number(v));

	var dp = new Array(cnt).fill(0);
	for (var i = 0; i < cnt; i++) {
		var max = 0;
		for (var j = 0; j < i; j++) {
			if (inputs[i] > inputs[j] && dp[j] > max) {
				max = dp[j];
			}
		}
		dp[i] = max + 1;
	}
	console.log(Math.max(...dp));

	process.exit();
});

