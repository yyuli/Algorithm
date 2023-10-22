let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split('\n');
input.map((v)=>{
    if(v.includes(" ")) {
        console.log(parseInt(v.split(" ")[0]) + parseInt(v.split(" ")[1]));
    }
});