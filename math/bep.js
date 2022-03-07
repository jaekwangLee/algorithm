const fs = require("fs");
const values = fs.readFileSync("/dev/stdin").toString().split(" ");
const numValues = values.map((val) => Number(val));
// const numValues = [2100000000, 9, 10];

function main(fixedPrice, producePrice, productPrice) {
  if (producePrice >= productPrice) {
    console.log(-1);
    return;
  }

  let income = fixedPrice + 1;
  const productMargin = productPrice - producePrice;
  console.log(Math.ceil(income / productMargin));
}

main(numValues[0], numValues[1], numValues[2]);

const rows = [
  15,
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];
