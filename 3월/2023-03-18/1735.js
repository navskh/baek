const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input =[];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let first = input[0].split(' ').map(Number);
  let second = input[1].split(' ').map(Number);

  let thisMIN = getMIN(first[1], second[1]);

  let prev = first[0] * thisMIN/first[1];
  let next = second[0] * thisMIN/second[1];
  let GCD = getGCD(prev + next, thisMIN);
  let answer = `${(prev + next)/GCD} ${thisMIN/GCD}`;
  console.log(answer);

  // 최소공배수 구하기
  function getMIN(first, second) {
    let a = first;
    let b = second;

    let oA = a;
    let oB= b;
    while (a % b != 0) {
      let r = a % b;
  
      if (r != 0) {
        a = b;
        b = r;
      }
    }
    let gcd = oA * oB / b;
    return gcd;
  }

  //최대공약수 구하기
  function getGCD(a, b) {
    while (a % b != 0) {
      let r = a % b;
  
      if (r != 0) {
        a = b;
        b = r;
      }
    }

    return b;
  }

	process.exit();
});
