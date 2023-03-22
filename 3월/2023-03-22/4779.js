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
    let line = '';
    input.forEach(number => {
      makeLine(number);
      console.log(line.join(''));
      line = '';
    })
    
    function makeLine(n) {
      let len = 3 ** n;
      for (let i = 0; i < len; i++) {
        line += '-';
      }

      line = line.split('');

      if(len > 1) deleteLine(0, len, n);
    }

    function deleteLine(start, end, N) {
      if (N == 0) return;
      let mid = (end - start) / 3

      for (let i = start + mid; i <= start + (2 * mid - 1); i++) {
        line[i] = ' ';
      }

      if (N != 0) {
        deleteLine(start, start + mid, N - 1);
				deleteLine(start + 2 * mid, end, N - 1);
      }
    }

  process.exit();
});