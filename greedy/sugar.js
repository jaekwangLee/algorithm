const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const SUGAR_A = 3; //kg
const SUGAR_B = 5; //kg

function sugarman(kg) {
  let min = Math.floor(kg / SUGAR_B);
  while (min >= 0) {
    const left = kg - min * SUGAR_B;
    if (left % SUGAR_A === 0) {
      console.log(min + left / SUGAR_A);
      return;
    } else {
      min--;
    }
  }

  console.log(-1);
}

const val = parseInt(input, 10);
sugarman(val);
