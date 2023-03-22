const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let memo = [];
	for (let i = 0; i < 21; i++) {
		memo[i] = [];
		for (let j = 0; j < 21; j++) {
			memo[i][j] = [];
			for (let k = 0; k < 21; k++) {
				memo[i][j][k] = 0;
			}
		}
	}

	// 메모이제이션 구현
	function w(a, b, c) {
		if (a <= 0 || b <= 0 || c <= 0) return 1;
		if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

		if (memo[a][b][c]) return memo[a][b][c];

		if (a < b && b < c)
			return memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
		else
      return (
        memo[a][b][c] = 
				w(a - 1, b, c) +
				w(a - 1, b - 1, c) +
				w(a - 1, b, c - 1) -
				w(a - 1, b - 1, c - 1)
			);
  }
  
  let answer = '';
  input.forEach(ele => {
    let thisArr = ele.split(' ').map(Number);

    let a = thisArr[0];
    let b = thisArr[1];
    let c = thisArr[2];

    if (a == -1 && b == -1 && c == -1) return false;

    answer += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`;
  })

  console.log(answer);
	process.exit();
});
