const sol = (input) => {
  const N = +input[0];
  const numbers = input[1].split(" ").map(Number);
  const operator = input[2].split(" ").map(Number);
  const operObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
      if (oper1 < 0) {
        return -Math.floor(-oper1 / oper2);
      }
      return Math.floor(oper1 / oper2);
    }, // operObj 객체에 순차적으로 덧셈, 뺄셈, 곱셈, 나눗셈을 선언해둔다.
  };

  const temp = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  function dfs(L) {
    if (L === N - 1) { // 연산자는 숫자의 개수보다 1개 적으므로, 누적된 연산자가 N-1개라면 최대 최소값을 판단 할 것.
      let oper1 = numbers[0];
      for (let i = 0; i < temp.length; i++) {
        let oper2 = numbers[i + 1];
        let idx = temp[i];
        oper1 = operObj[idx](oper1, oper2); // operObj 객체를 이용해서 연산자에 따른 연산을 순차적으로 수행
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

  return `${max}\n${min}`;
};

// 백준에서 입력을 받는 코드
const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });