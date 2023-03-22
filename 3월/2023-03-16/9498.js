
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  // 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
  let thisInput = parseInt(line);

  let answer = '';
  if (thisInput >= 90) answer = 'A';
  else if (thisInput >= 80) answer = 'B';
  else if (thisInput >= 70) answer = 'C';
  else if (thisInput >= 60) answer = 'D';
  else answer = 'F';

  console.log(answer);
  rl.close();
}).on("close", function() {
  process.exit();
});