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
    for (let i = 0; i < input.length; i += 2){
      let height = input[i];
      let ho = input[i + 1];
      let thisApart = [];

      for (let j = 0; j <= height; j++){
        thisApart.push([1]);
        for (let k = 1; k < ho; k++){
          if (j == 0) thisApart[j].push(k+1);
          else {
            thisApart[j].push(thisApart[j][k - 1] + thisApart[j - 1][k]);
          }
        }
      }

      let answer = '';
      answer += thisApart[height][ho - 1];

      console.log(answer);

    }
  process.exit();
});