const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
.on('close', function () {
  let NM = input.shift().split(' ');
  let N = Number(NM.shift());
  let M = Number(NM.shift());
  let white = [
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
	];
	let black = [
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
		'BWBWBWBW',
		'WBWBWBWB',
	];

  let board = [];
  input.forEach(ele => {
    board.push(ele.split(''));
  })
  let answer = 90;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      validate(j, i);
    }
  }

  function validate(x, y) {
    let checkWhite = 0;
    let checkBlack = 0;

    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {      
        if (board[i][j] !== white[i-y][j-x])
          checkWhite++;
        if (board[i][j] !== black[i-y][j-x])
          checkBlack++;
      }
    }

    let min = checkBlack < checkWhite ? checkBlack : checkWhite;
    
    if (min < answer)
      answer = min;
  }

  console.log(answer);
  process.exit();
});


