const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim();
const [count, A, B] = inputs.split("\n");
