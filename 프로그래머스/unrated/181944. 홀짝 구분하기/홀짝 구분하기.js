const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let n = 0;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    if(n % 2 === 0) {
        console.log(`${n} is even`);
    }else {
        console.log(`${n} is odd`);
    }
});