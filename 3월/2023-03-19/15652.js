
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(Number);

  let num1 = inputArr[0];
  let num2 = inputArr[1];

  let arr = Array.from({length: num1}, (v, k) => k + 1);

  const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) {
      let resultArr = arr.map(v => [v]);
      // console.log(resultArr);
      return resultArr;
    }
    arr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index);
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map(v => [fixed, ...v]);
        results.push(...attached);
    });

    return results;
  }

  let answer = getPermutations(arr, num2);

  let result = '';
  answer.forEach(a => {
    result += a.join(' ');
    result += '\n';
  })

  console.log(result);

  rl.close();
}).on("close", function() {
  process.exit();
});