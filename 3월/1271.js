const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let inputArr = line.split(' ');

	let ret = BigInt(inputArr[0]) / BigInt(inputArr[1]);
	let urn = BigInt(inputArr[0]) % BigInt(inputArr[1]);

	console.log(`${ret}\n${urn}`);

	rl.close();
}).on('close', function () {
	process.exit();
});
