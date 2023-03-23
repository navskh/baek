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

	input.forEach(num => {
		let arr = num.split(' ').map(Number);

		let thisNum = arr[0];
		let thisSeq = arr[1];

		let pow = 1;
		for (let j = 0; j < thisSeq; j++) {
			pow = (pow * thisNum) % 10;
		}

		console.log(pow == 0 ? 10 : pow);
	});
	process.exit();
});
