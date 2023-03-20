const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
  let N = parseInt(input[0]);
	let numbers = input[1].split(' ').map(Number);
	let operator = input[2].split(' ').map(Number);
  
  let temp = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  const operate = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
      if (oper1 < 0) {
        return -Math.floor(-oper1 / oper2);
      }
      return Math.floor(oper1 / oper2);
    },
  };

  function dfs(L) {
    if (L === N - 1) { // 연산자는 숫자의 개수보다 1개 적으므로, 누적된 연산자가 N-1개라면 최대 최소값을 판단 할 것.
      let oper1 = numbers[0];
      for (let i = 0; i < temp.length; i++) {
        let oper2 = numbers[i + 1];
        let idx = temp[i];
        oper1 = operate[idx](oper1, oper2); // operObj 객체를 이용해서 연산자에 따른 연산을 순차적으로 수행
      }
      if (oper1 > max) max = oper1;
      if (oper1 < min) min = oper1;
    }

    // 배열의 조합별로 opereate 실행
    for (let i = 0; i < 4; i++) {
      if (!operator[i]) continue;
      operator[i] -= 1;
      temp.push(i);
      dfs(L + 1);
      operator[i] += 1;
      temp.pop();
    } 
  }
  dfs(0);

  console.log(max + '\n' + min);

	process.exit();
});
