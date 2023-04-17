const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = input[0] + input[1] + input[2] + input[3];

if (parseInt(a) % 4 === 0 && parseInt(a) % 100 !== 0 || parseInt(a) % 4 === 0 && parseInt(a) % 400 === 0) {
    console.log(1);
}else {
    console.log(0);
}