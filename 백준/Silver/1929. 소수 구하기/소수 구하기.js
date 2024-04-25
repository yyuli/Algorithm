let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const MIN = parseInt(input[0], 10);
const MAX = parseInt(input[1], 10);

let prime = Array(MAX + 1).fill(true);
prime[0] = prime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      prime[j] = false;
    }
  }
}

for (let i = MIN; i <= MAX; i++) {
  if (prime[i]) {
    console.log(i);
  }
}