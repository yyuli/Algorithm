let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const obj = {};
for (let i = 0; i < input.length; i++) {
  const small = input[i].toLowerCase();
  if (Object.keys(obj).includes(small)) {
    obj[small] += 1;
  } else {
    obj[small] = 1;
  }
}

let maxNum = 0;
for (const key in obj) {
  if (maxNum < obj[key]) {
    maxNum = obj[key];
  }
}

const answerList = Object.keys(obj).filter((v) => {
  return obj[v] === maxNum;
});

if (answerList.length > 1) {
  console.log("?");
} else {
  console.log(answerList[0].toUpperCase());
}
