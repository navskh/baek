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
  // 1. 배열 만들기
    let len = input[0].split(' ')[0];
    let arr = Array.from({ length: len }, (v, x) => x + 1);

    input.shift();
    input.forEach(ele => {
      let thisArr = ele.split(' ').map(x => parseInt(x));
      let start = thisArr[0] - 1;
      let end = thisArr[1];
      let stand = thisArr[2] - 1;

      // 2. 배열 뽑아내기
      let sampleArr1 = arr.slice(start, stand);
      let sampleArr2 = arr.slice(stand, end);
      
      // 3. 순서 회전
      let rotate = sampleArr2.concat(...sampleArr1);

      // 4. 집어넣기
      arr.splice(start, end - start, ...rotate);
    })
    console.log(arr.join(' '));

  process.exit();
});