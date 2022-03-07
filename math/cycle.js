const fs = require("fs");
const value = Number(fs.readFileSync("/dev/stdin").toString().split(" "));

function main(val) {
  let cycle = 0;
  let sum;
  let num = val;

  while (true) {
    cycle++;

    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);

    if (num === val) {
      console.log(cycle);
      break;
    }
  }
}

main(value);
