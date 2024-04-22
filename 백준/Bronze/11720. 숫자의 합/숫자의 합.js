let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let sum = 0;
for (let i = 0; i < input[1].length; i++) {
  sum += parseInt(input[1][i], 10);
}
console.log(sum);
