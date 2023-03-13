#### 1) fs 사용하기

```js
// fs
const fs = require('fs');
const inputs = fs.readFileSync('./dev/stdin').toString().trim();

const regex = /^(100+1+|01)+$/;
if (input.match(regex)) {
    console.log("SUBMARINE");
} else {
    console.log("NOISE");
}
```


#### 2) readline 사용하기

```js
// 예제 입력이 한줄로 되어 있을 때
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);

  rl.close();
}).on("close", function() {
  process.exit();
});


// 예제 입력이 여러줄로 되어 있을 떼
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
  console.log(input);
  process.exit();
});

```