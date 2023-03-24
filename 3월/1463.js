const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let input = +line;

	const answer = new Array(input + 1).fill(0);

	for (let i = 2; i <= input; i++) {
		answer[i] = answer[i - 1] + 1;

		if (i % 2 === 0) {
			answer[i] = Math.min(answer[i], answer[i / 2] + 1);
		}

		if (i % 3 === 0) {
			answer[i] = Math.min(answer[i], answer[i / 3] + 1);
		}
  }
  
  console.log(answer[input]);

	rl.close();
}).on('close', function () {
	process.exit();
});
