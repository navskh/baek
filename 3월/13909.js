const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  let input = +line;

  console.log(Math.floor(Math.sqrt(input)));

  // let arr = Array.from({ length: input + 1 }, (v, k) => 0);

  // for (let i = 1; i <= input; i++) {
  //   for (let j = 1; j < arr.length; j++){
  //     if (j % i == 0) arr[j] = toggle(arr[j]);
  //   }
  // }

  // function toggle(num) {
  //   num = num == 1 ? 0 : 1;
  //   return num;
  // }

  // arr.shift();
  // let answer = arr.filter(x => x == 1).length;
  // console.log(arr);

  rl.close();
}).on("close", function() {
  process.exit();
});