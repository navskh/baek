
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let thisInput = line;
  let set = new Set();

  for(let i=0; i<thisInput.length; i++){
    for(let j=i; j<thisInput.length; j++){
      set.add(thisInput.substring(i, j+1));
    }
  }

  console.log(set.size);

  rl.close();
}).on("close", function() {
  process.exit();
});