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

  let answer = [];
	input.forEach(ele => {
		let thisArr = ele.split(' ').map(Number);

		let A = thisArr[0];
    let a = A;
		let B = thisArr[1];
    let b = B;

		// 유클리드 호제법
		while (a % b != 0) {
			let r = a % b;

			if (r != 0) {
				a = b;
				b = r;
			}
		}

    let min = A * B / b;
    answer.push(min);
	});

  console.log(answer.join('\n'));
	process.exit();
});
