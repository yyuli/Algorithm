let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();
console.log(`${`long `.repeat(parseInt(input) / 4)}int`)