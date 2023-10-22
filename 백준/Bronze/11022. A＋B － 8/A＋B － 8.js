let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const testCase = parseInt(input.shift());
let sum = "";
input.forEach((v, i) => {
    if(i < testCase)
    sum += `Case #${i+1}: ${parseInt(v.split(" ")[0])} + ${parseInt(v.split(" ")[1])} = ${parseInt(v.split(" ")[0]) + parseInt(v.split(" ")[1])}\n`;
})
console.log(sum);
