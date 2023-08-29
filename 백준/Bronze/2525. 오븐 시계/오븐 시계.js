const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let hour = parseInt(input[0].split(" ")[0]);
let min = parseInt(input[0].split(" ")[1]);
const time = parseInt(input[1]);

let plusHour = Math.floor(time / 60);
let plusMin = time % 60;

let endHour = hour;
let endMin = min;

endMin += plusMin;
if (endMin >= 60) {
    endMin -= 60;
    endHour += 1;
}

endHour += plusHour;
if (endHour >= 24) {
    endHour -= 24;
}

console.log(endHour, endMin);
