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
    // 브루트포스 알고리즘이라니 한번 해보자.
    // 브루트포스 알고리즘 = 노가다

    let arr = [];
    let goal = parseInt(input[0].split(' ')[1]);
    let inputArr = input[1].split(' ').map(x => parseInt(x));

    for (let i = 0; i < inputArr.length; i++){
      for (let j = i + 1; j < inputArr.length; j++){
        for (let k = j + 1; k < inputArr.length; k++) {
          if(inputArr[i] + inputArr[j] + inputArr[k] <= goal) arr.push(inputArr[i] + inputArr[j] + inputArr[k]);
        }
      }
    }

    let set = [...new Set(arr)];

    let answer = colsest(set, goal);

    console.log(answer);

    function colsest(arr, num) {
      let near = 0;
      arr.forEach(element => {
          near = num - element < num - near ? element : near;
      });
      return near;
    }

  
  process.exit();
});