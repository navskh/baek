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
  let inputArr = input[0].split(' ').map(Number);
  let K = inputArr[1];
  const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
  
    // 최대한 분할할여 push 
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
      count++;
      if (count === K) target = result[result.length - 1];
    }
  
    // 남은거 하나씩 넣기
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
      count++;
      if (count === K) target = result[result.length - 1];
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
      count++;
      if (count === K) target = result[result.length - 1];
    }
    return result;
  };
  
  let count = 0;
  let target;
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };
  

  let arr = input[1].split(' ').map(Number);

  mergeSort(arr);
  if (!target) target = -1;
  console.log(target);
  process.exit();
});