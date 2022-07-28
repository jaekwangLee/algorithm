const fs = require("fs");
// const inputs = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((val) => Number(val));

let dwalfs = [20, 20, 9, 17, 18, 15, 15, 18, 5];

function solution(list, targetNum) {
  let sum = list.reduce((prev, val) => Number(val) + prev, 0);
  let answer = "";
  for (let i = 0; i < 8; i++) {
    if (answer) {
      break;
    }

    for (let j = i + 1; j < 9; j++) {
      if (sum - (list[i] + list[j]) === targetNum) {
        list.splice(j, 1);
        list.splice(i, 1);
        list.sort((a, b) => a - b);

        answer = list.join("\n");
        break;
      }
    }
  }

  console.log(answer);
}

solution(dwalfs, 100);
