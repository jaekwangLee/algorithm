const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const value = parseInt(input[0]);

function factorial(n, sum) {
  if (n === 0) {
    console.log(sum);
  } else {
    const multi = sum * n;
    const m = n - 1;
    factorial(m, multi);
  }
}

factorial(value, 1);
