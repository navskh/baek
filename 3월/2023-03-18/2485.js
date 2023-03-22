const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let totalCase = parseInt(input[0]);
	input.shift();

	let prev = 0;
	let diff = [];
	input.forEach(ele => {
		if (prev == 0) prev = ele;
		else {
			diff.push(ele - prev);
			prev = ele;
		}
	});

	let thisGCD = 0;
	for (let i = 0; i < totalCase - 2; i++) {
		if (i == 0) {
			thisGCD = getGCD(diff[i], diff[i + 1]);
			i++;
		} else {
			thisGCD = getGCD(thisGCD, diff[i]);
		}
	}

	let answer = diff.reduce((sum, cur) => {
		return sum += cur / thisGCD - 1;
	}, 0);

  console.log(answer);

	//최대공약수 구하기
	function getGCD(a, b) {
		while (a % b != 0) {
			let r = a % b;
			if (r != 0) {
				a = b;
				b = r;
			}
		}

		return b;
	}
	process.exit();
});
