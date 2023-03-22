const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let thisArr = line.split(' ').map(Number);

	let a = thisArr[0];
	let b = thisArr[1];

	let A = a;
	let B = b;

	while (a % b != 0) {
		let r = a % b;

		if (r != 0) {
			a = b;
			b = r;
		}
	}

  let answer = A * B / b;
	console.log(answer);

	rl.close();
}).on('close', function () {
	process.exit();
});
