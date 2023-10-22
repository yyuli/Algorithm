let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testCase = parseInt(input.shift());
let sum = "";
input.forEach((v, i) => {
  if (i < testCase) {
    const [a, b] = v.split(" ").map(Number);
    sum += a + b + '\n';
  }
});
console.log(sum);
