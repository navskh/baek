
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(Number);

  let number1 = inputArr[0];
  let number2 = inputArr[1];

  let arr = Array.from({ length: number1 }, (v, k) => k + 1);

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results; // 결과 담긴 results return
  }

  let answer = getCombinations(arr, number2);

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