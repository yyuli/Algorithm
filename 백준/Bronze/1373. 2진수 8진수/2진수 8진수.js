let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = [];
for (let i = input.length; i > 0; i -= 3) {
  let binary = input.slice(Math.max(i - 3, 0), i);
  let octal = parseInt(binary, 2);
  answer.push(octal);
}

console.log(answer.reverse().join(""));