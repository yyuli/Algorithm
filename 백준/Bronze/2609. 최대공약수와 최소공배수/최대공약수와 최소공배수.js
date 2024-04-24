let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const sortedInput = input
  .map((v) => {
    return parseInt(v, 10);
  })
  .sort((a, b) => a - b);

let num1 = sortedInput[0];
let num2 = sortedInput[1];
if (num2 % num1 === 0) {
  console.log(num1);
  console.log(num2);
} else {
  while (num1 > 1) {
    num1--;
    if (num2 % num1 === 0 && sortedInput[0] % num1 === 0) {
      console.log(num1);
      console.log((num2 / num1) * sortedInput[0]);
      break;
    }
  }
}
