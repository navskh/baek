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
	let answer = '';
	input.forEach(num => {
		let numArr = num
			.split(' ')
			.map(Number)
			.sort((a, b) => b - a);

		let a = numArr[0];
		let b = numArr[1];

		function combi(a, b) {
			let A = 1;
			let B = 1;
			for (let i = a; i > a - b; i--) {
				A = BigInt(A) * BigInt(i);
			}
			for (let j = b; j > 0; j--) {
				B = BigInt(B) * BigInt(j);
			}

			return BigInt(A) / BigInt(B);
		}

		answer += combi(a, b) + '\n';
	});
	console.log(answer);
	process.exit();
});
