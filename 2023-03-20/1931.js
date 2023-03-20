const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {

  // 최대 개수
  let n = parseInt(input[0]);
  
  
	input = input.slice(1);
	let list = [];
	for (i of input) {
		list.push(i.split(' ').map(el => parseInt(el)));
  }
  

  list.sort(function (a, b) {
		if (a[1] === b[1]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
  });
  
	let count = 1;
  let tmp = list[0][1];

	for (let i = 1; i < n; i++) {
		if (tmp <= list[i][0]) {
			tmp = list[i][1];
			count += 1;
		}
	}
	console.log(count);

});
