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
    let thisList = [];
    input.forEach(ele => {
      let thisArr = ele.split(' ').map(x => parseInt(x));

      thisList.push({ weight: thisArr[0], height: thisArr[1] });
    })

    let answer = [];
    thisList.forEach(ele => {
      let thisCnt = thisList.filter(list => ele.weight < list.weight && ele.height < list.height).length;
      answer.push(thisCnt + 1);
    })

    console.log(answer.join(' '));
  process.exit();
});