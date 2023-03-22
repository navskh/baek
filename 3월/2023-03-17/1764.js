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
    let thisArr = input[0].split(' ').map(Number);
    
    let listen = thisArr[0];
    let see = thisArr[1];

    input.shift();
    let setlisten = new Set(input.slice(0, listen));
    let setSee = new Set(input.slice(listen));

    let cnt = 0;
    let answerArr = [];
    setlisten.forEach(ele => {
      if (setSee.has(ele)) {
        cnt++;
        answerArr.push(ele);
      }
    })

    answerArr.sort();
    let answer = cnt + '\n' + answerArr.join('\n');


    console.log(answer);
  process.exit();
});