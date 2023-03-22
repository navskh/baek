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
    input.shift();
    let answer = '';
    input.forEach(ele => {
      let thisArr = ele.split(' ').map(x => parseInt(x));
      let H = thisArr[0];
      let W = thisArr[1];
      let N = thisArr[2];

      let 나머지 = N % H;
      if (나머지 == 0) 나머지 = H;
      let 몫 = Math.ceil(N / H);
      몫 = 몫 >= 10 ? 몫 : '0' + 몫;

      answer += `${나머지}${몫}\n`
    })

    console.log(answer);

  process.exit();
});