const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


let arr = new Array(100);

for (let i = 0; i < arr.length; i++){
  arr[i] = Array.from({ length: 100 }, () => 0);
}

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    input.shift();

    input.forEach(ele => {
      let thisArr = ele.split(' ').map(x => parseInt(x));
      let x = thisArr[0] - 1;
      let y = thisArr[1] - 1;

      for (let j = 0; j < 10; j++){
        for (let k = 0; k < 10; k++){
          arr[x + j][y + k] = 1;
        }
      }
    })


    let answer = 0;
    arr.forEach(sam => {
      sam.forEach(ele => {
        if (ele == 1) answer++;
      })
    })

    console.log(answer);

  process.exit();
});