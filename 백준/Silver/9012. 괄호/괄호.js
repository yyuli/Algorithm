let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
for (let i = 1; i <= parseInt(input[0], 10); i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      arr.push(input[i][j]);
    } else if (input[i][j] === ")") {
      if (arr.length === 0 || arr.includes(")")) {
        arr.push(input[i][j]);
      } else {
        arr.pop();
      }
    }
  }
  if (arr.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  arr = [];
}
