const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const value = parseInt(input[0]);

function fibonacci(m, n, arr) {
  const a = arr[0];
  const b = arr[1];

  if (m > n) {
    console.log(b);
  } else {
    const newArr = [b, a + b];
    const _m = m + 1;
    fibonacci(_m, n, newArr);
  }
}

if (value === 0) {
  console.log(0);
} else if (value === 1) {
  console.log(1);
} else {
  fibonacci(2, value, [0, 1]);
}
