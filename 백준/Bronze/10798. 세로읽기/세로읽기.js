let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const MAX = 15;
let answer = "";

for (let i = 0; i < MAX; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i < input[j].length) {
      answer += input[j][i];
    }
  }
}

console.log(answer);
