const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
  let answer = [];
	input.forEach(str => {
		let isRight = true;
    let stack = [];
    if(str == ".") return false;
		for (let i = 0; i < str.length; i++) {
			if (str[i] == '[' || str[i] == '(') {
				stack.push(str[i]);
			} else if (str[i] == ']') {
				if (stack[stack.length - 1] == '[') {
					stack.pop();
				} else {
					isRight = false;
					break;
				}
			} else if (str[i] == ')') {
				if (stack[stack.length - 1] == '(') {
					stack.pop();
				} else {
					isRight = false;
					break;
				}
			} else if (str[i] == '.') break;
		}
		if (stack.length > 0 || !isRight) answer.push('no');
    else answer.push('yes');
	});
  console.log(answer.join('\n'));

	process.exit();
});
