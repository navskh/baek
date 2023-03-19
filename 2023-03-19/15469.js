
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputArr = line.split(' ').map(Number);

  let cnt = inputArr[0];
  let comb = inputArr[1];

  let arr = Array.from({ length: cnt }, (v, k) => k + 1);

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results; 
  }

  let answer = getPermutations(arr, comb);

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