const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = input[0] + input[1] + input[2];

if(parseInt(a)>=90) {
    console.log("A");
}else if(parseInt(a)>=80) {
    console.log("B");
}else if(parseInt(a)>=70) {
    console.log("C");
}else if(parseInt(a)>=60) {
    console.log("D");
}else {
    console.log("F");
}