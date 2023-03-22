
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  
  let input = +line;
  let chessArr = new Array(input).fill(0);

  function isRight(x) {
    for (let i = 0; i < x; i++){
      if (chessArr[x] == chessArr[i]) return false;
      if (Math.abs(chessArr[x] - chessArr[i]) == x - i) return false;
    }

    return true;
  }

  let answer = 0;
  function search(x) {
    if (x == input) answer++;
    else {
      for (let i = 0; i < input; i++) {
        if (chessArr[x]) continue;
        chessArr[x] = i;
        if (isRight(x)) search(x + 1);
        chessArr[x] = 0;
      }
    }
  }

  search(0);

  console.log(answer);

  rl.close();
}).on("close", function() {
  process.exit();
});