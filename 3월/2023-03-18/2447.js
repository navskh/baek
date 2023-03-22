const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let input = parseInt(line);
	let star = [];

	let sq = Math.sqrt(input);

	// (1,1)
	// 1

	// (3,3) (3,4) (3,5)
	// (4,3) (4,4) (4,5)
	// (5,3) (5,4) (5,5)
	// 3~5

	// ()

	function makeStar(i, j) {
		if (i % 3 == 1 && j % 3 == 1) star.push(' ');
		else {
      if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
        star.push('*');
      }
      else {
        makeStar(Math.floor(i / 3), Math.floor(j / 3));
      }
		}
	}

	for (let i = 0; i < input; i++) {
		for (let j = 0; j < input; j++) {
      makeStar(i, j);
    }
		star.push('\n');
	}

	console.log(star.join(''));

	rl.close();
}).on('close', function () {
	process.exit();
});
