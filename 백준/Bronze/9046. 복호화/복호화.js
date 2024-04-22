let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.splice(0, 1);

for (let i = 0; i < input.length; i++) {
  const trimmedInput = input[i].split(" ").join("");
  const obj = {};
  for (let j = 0; j < trimmedInput.length; j++) {
    if (Object.keys(obj).includes(trimmedInput[j])) {
      obj[trimmedInput[j]] += 1;
    } else {
      obj[trimmedInput[j]] = 1;
    }
  }
  let maxNum = 0;
  for (const key in obj) {
    if (obj[key] > maxNum) {
      maxNum = obj[key];
    }
  }
  const repeatArr = Object.keys(obj).filter((key) => {
    return obj[key] === maxNum;
  });
  if (repeatArr.length === 1) {
    console.log(repeatArr[0]);
  } else {
    console.log("?");
  }
}
