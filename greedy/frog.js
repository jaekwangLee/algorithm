const fs = require("fs");
// const rows = fs.readFileSync("/dev/stdin").toString().split("\n");
const rows = [5, "1 2 2 1 2", "1 5"];
const numberOfSteps = rows[1].split(" ").map((str) => Number(str));
const [currentPosition, targetPosition] = rows[2]
  .split(" ")
  .map((str) => Number(str));
