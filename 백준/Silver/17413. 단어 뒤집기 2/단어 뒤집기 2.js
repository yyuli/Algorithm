let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let tag = false;
let space = false;

let tagString = "";
let reversedString = [];
let answer = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    tag = true;
  } else if (input[i] === ">") {
    tag = false;
    tagString += input[i];
    answer += tagString;
    tagString = "";
  }

  if (tag) {
    tagString += input[i];
    answer += reversedString.reverse().join("");
    reversedString = [];
  } else {
    if (input[i] === " ") {
      space = true;
    } else if (input[i - 1] === " ") {
      space = false;
    }
    if (space) {
      answer += reversedString.reverse().join("");
      reversedString = [];
      answer += " ";
    } else {
      if (input[i] === ">") {
        continue;
      } else {
        reversedString.push(input[i]);
      }
    }
  }
}

if (reversedString.length > 0) {
  answer += reversedString.reverse().join("");
}

console.log(answer);
