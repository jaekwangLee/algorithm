const fs = require("fs");
const rows = fs.readFileSync("/dev/stdin").toString().split("\n");

function print(arr) {
  const text = arr.map((str) => spaceRemover(str)).join("\n");
  console.log(text);
}

function spaceRemover(str) {
  const arrStr = str.split(" ");
  const removedSpaceArrStr = arrStr
    .filter((str) => str !== "")
    .map((str) => str.replace(" ", ""));
  return removedSpaceArrStr.join(" ");
}

print(rows);
