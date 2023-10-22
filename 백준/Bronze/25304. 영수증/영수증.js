let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const sum = parseInt(input[0]);
const cnt = parseInt(input[1]);
let result = 0;

input.map((v, i) => {
    if(v.includes(" ")) {
        result += parseInt(v.split(" ")[0]) * parseInt(v.split(" ")[1]);
    }
})
if(result === sum) {
    console.log("Yes");
}else {
    console.log("No");
}