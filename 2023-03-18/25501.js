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

  function recursion (str, l, r, cnt) {
    if(l >= r) return [1, cnt];
    else if(str[l] != str[r]) return [0, cnt];
    else return recursion(str, l+1, r-1, cnt+1); 
  }
  function isP (str){
    return recursion(str, 0, str.length - 1, 1);
  }

  let answer = '';
  input.forEach(ele =>{
    let thisArr = isP(ele);
    answer += thisArr.join(' ') + '\n';
  })

  console.log(answer);
  process.exit();
});