const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(a, b) {
  let min = a.length;
  for (let i = 0; i <= b.length - a.length; i++) {
    let curMin = 0;
    for (let j = i; j < i + a.length; j++) {
      if (a[j - i] !== b[j]) curMin++;
    }

    min = Math.min(min, curMin);
  }

  console.log(min);
}

solution(inputs[0], inputs[1]);
