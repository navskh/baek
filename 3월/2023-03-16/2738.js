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
    let matvol = input[0].split(' ').map(x => parseInt(x));
    

    input.shift();
    let A = [];
    let B = [];
    // A만들기
    for (let i = 0; i < matvol[0]; i++){
      A.push(input[i].split(' ').map(x => parseInt(x)));
    }

    for (let j = matvol[0]; j < 2 * matvol[0]; j++){
      B.push(input[j].split(' ').map(x => parseInt(x)));
    }

    let answer = '';
    for (let k = 0; k < matvol[0]; k++){
      for (let l = 0; l < matvol[1]; l++){
        answer += A[k][l] + B[k][l] + ' ';
      }
      answer += '\n';
    }

    console.log(answer);
  process.exit();
});